<script setup>
import { computed, onUnmounted, ref } from 'vue'

// Systems section — interactive agent-run demo (Build 4).
// Verbatim from the preview: label, heading, intro. The preview's text
// fetch does not expose the demo's workflow names or trace steps, so the
// workflows below are the three shipped engagements from the preview's
// own Proof section, and each trace is scripted from that case's pipeline
// steps and metrics. Everything runs client-side; no live system is called.

const WORKFLOWS = [
  {
    id: 'triage',
    name: 'Support triage',
    detail: 'Fintech · Series B',
    plan: 'Classify inbound ticket ZD-4812, draft a grounded reply, escalate if regulatory.',
    steps: [
      { kind: 'tool', call: 'zendesk.get_ticket({ id: "ZD-4812" })', result: 'Ticket: “My transfer is stuck in pending” · priority: high' },
      { kind: 'tool', call: 'intent.classify({ text: "transfer stuck in pending", model: "intent-v3" })', result: 'Intent: payment_status · confidence 0.94' },
      { kind: 'tool', call: 'rag.search({ query: "transfer pending SLA", k: 5 })', result: '5 passages · help center: “Transfers” + “Pending review”' },
      { kind: 'guardrail', call: 'Regulatory check', result: 'No regulated content detected — no escalation required' },
      { kind: 'tool', call: 'draft.reply({ ticket_id: "ZD-4812", sources: 5 })', result: 'Draft ready — grounded in 2 help-center passages' },
      { kind: 'guardrail', call: 'Approval queue', result: 'Draft held for human review · first-response SLA 38m' },
    ],
    answer: 'Draft sent to the approval queue. Ticket auto-drafted in 41s — median first response 4.1h → 38m.',
  },
  {
    id: 'ap',
    name: 'AP reconciliation',
    detail: 'Logistics · Mid-market',
    plan: 'Match invoice INV-2204 against open POs, post to NetSuite in dry-run.',
    steps: [
      { kind: 'tool', call: 'drive.ingest({ file: "INV-2204.pdf" })', result: 'Invoice extracted — 14 line items' },
      { kind: 'tool', call: 'vision.extract({ document: "INV-2204.pdf" })', result: 'Fields extracted · accuracy 99.2%' },
      { kind: 'tool', call: 'po.match({ invoice: "INV-2204", tolerance: 0.01 })', result: 'Matched PO-8817 · 14/14 lines · variance $0.00' },
      { kind: 'tool', call: 'netsuite.dry_run({ po: "PO-8817", amount: 18420.00 })', result: 'Dry-run write OK — no exceptions' },
      { kind: 'guardrail', call: 'Dry-run mode', result: 'No live writes until finance approves' },
    ],
    answer: 'Invoice matched and staged. 1,900+ invoices/month processed · ~120h manual work saved monthly.',
  },
  {
    id: 'knowledge',
    name: 'Knowledge Q&A',
    detail: 'B2B SaaS · Enterprise',
    plan: 'Answer “What is our refund policy for annual plans?” with cited sources, respecting permissions.',
    steps: [
      { kind: 'tool', call: 'acl.resolve({ user: "a.chen", scope: "finance-docs" })', result: 'Access: 3 of 5 sources permitted' },
      { kind: 'tool', call: 'retrieve.hybrid({ query: "refund policy annual plans", k: 8 })', result: '8 candidates · embeddings + BM25' },
      { kind: 'tool', call: 'rerank.top({ candidates: 8, keep: 3 })', result: 'Top 3: “Billing policy” · “Refunds” · “Annual plans”' },
      { kind: 'guardrail', call: 'Citation check', result: 'Every claim linked to a permitted source' },
    ],
    answer: 'Annual plans are refundable pro-rata within 30 days of renewal — cited from “Billing policy §4.2” and “Refunds §1”. recall@5 0.93 · p95 latency <1.2s.',
  },
]

const selectedId = ref('triage')
const selected = computed(() => WORKFLOWS.find((w) => w.id === selectedId.value))
const visibleSteps = ref([]) // steps revealed so far in this run
const running = ref(false)
const finished = ref(false)
const runTime = ref(null)

let timers = []
let startedAt = 0

function clearTimers() {
  timers.forEach((t) => clearTimeout(t))
  timers = []
}

function selectWorkflow(id) {
  if (running.value) return
  selectedId.value = id
  visibleSteps.value = []
  finished.value = false
  runTime.value = null
}

function run() {
  if (running.value) return
  clearTimers()
  visibleSteps.value = []
  finished.value = false
  runTime.value = null
  running.value = true
  startedAt = performance.now()

  // Plan line first, then one step every 650ms, then the answer.
  timers.push(setTimeout(() => {
    visibleSteps.value = [{ kind: 'plan', call: 'Plan', result: selected.value.plan }]
  }, 300))
  selected.value.steps.forEach((step, i) => {
    timers.push(setTimeout(() => {
      visibleSteps.value = [...visibleSteps.value, step]
    }, 300 + (i + 1) * 650))
  })
  timers.push(setTimeout(() => {
    running.value = false
    finished.value = true
    runTime.value = ((performance.now() - startedAt) / 1000).toFixed(1)
  }, 300 + (selected.value.steps.length + 1) * 650))
}

function reset() {
  clearTimers()
  running.value = false
  visibleSteps.value = []
  finished.value = false
  runTime.value = null
}

onUnmounted(clearTimers)
</script>

<template>
  <div class="systems section">
    <div class="container">
      <p class="section-label">02 // Systems</p>

      <h2 class="systems-title">Watch an agent run.</h2>

      <p class="systems-intro">
        A simulated execution trace: planning, typed tool calls, guardrails
        and the final answer. Pick a workflow and press run.
      </p>

      <div class="demo">
        <div class="demo-toolbar">
          <p class="demo-title">
            <span class="demo-dot" aria-hidden="true"></span>
            agent-run — simulated trace
          </p>
          <p class="demo-status">
            <template v-if="running">running…</template>
            <template v-else-if="finished">complete · {{ visibleSteps.length }} steps · {{ runTime }}s</template>
            <template v-else>idle</template>
          </p>
        </div>

        <div class="workflow-picker" role="group" aria-label="Pick a workflow">
          <button
            v-for="w in WORKFLOWS"
            :key="w.id"
            type="button"
            class="workflow"
            :class="{ active: w.id === selectedId }"
            :aria-pressed="w.id === selectedId"
            :disabled="running"
            @click="selectWorkflow(w.id)"
          >
            <span class="workflow-name">{{ w.name }}</span>
            <span class="workflow-detail">{{ w.detail }}</span>
          </button>
        </div>

        <div class="trace" aria-live="polite">
          <p v-if="visibleSteps.length === 0" class="trace-empty">
            Select a workflow, then press run. Nothing here calls a live
            system — every line is simulated locally.
          </p>
          <div
            v-for="(step, i) in visibleSteps"
            :key="i"
            class="trace-line"
            :class="`trace-${step.kind}`"
          >
            <span class="trace-kind">{{ step.kind === 'tool' ? 'TOOL' : step.kind === 'guardrail' ? 'GUARDRAIL' : 'PLAN' }}</span>
            <span class="trace-body">
              <code class="trace-call">{{ step.call }}</code>
              <span class="trace-result">{{ step.result }}</span>
            </span>
          </div>

          <div v-if="finished" class="trace-answer">
            <span class="trace-kind">ANSWER</span>
            <span class="trace-body">{{ selected.answer }}</span>
          </div>
        </div>

        <div class="demo-controls">
          <button type="button" class="run-button" :disabled="running" @click="run">
            {{ running ? 'Running…' : finished ? 'Run again' : 'Run' }}
          </button>
          <button type="button" class="reset-button" :disabled="running || visibleSteps.length === 0" @click="reset">
            Reset
          </button>
          <p class="demo-note">Simulated trace — no live systems are called.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.systems {
  border-bottom: 1px solid var(--border);
}

.systems-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.systems-intro {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.demo {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-raised);
  overflow: hidden;
}

.demo-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 13px;
}

.demo-title {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.02em;
}
.demo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  flex: none;
}
.demo-status { margin: 0; color: var(--muted); }

.workflow-picker {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 20px;
  border-bottom: 1px solid var(--border);
}
.workflow {
  text-align: left;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font-family: var(--font);
  cursor: pointer;
}
.workflow:hover:not(:disabled) { border-color: var(--accent); }
.workflow.active {
  border-color: var(--accent);
  outline: 1px solid var(--accent);
}
.workflow:disabled { cursor: default; opacity: 0.6; }
.workflow-name {
  display: block;
  font-weight: 650;
  font-size: 15px;
  margin-bottom: 2px;
}
.workflow-detail {
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
}

.trace {
  min-height: 220px;
  padding: 20px;
  font-family: var(--font-mono);
  font-size: 13.5px;
  line-height: 1.6;
}
.trace-empty { margin: 0; color: var(--muted); }

.trace-line {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--border);
}
.trace-line:last-child { border-bottom: 0; }
.trace-kind {
  flex: none;
  width: 86px;
  padding-top: 2px;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.trace-tool .trace-kind { color: var(--accent); }
.trace-guardrail .trace-kind { color: var(--accent-dim); }
.trace-plan .trace-kind { color: var(--accent); }
.trace-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.trace-call {
  font-family: var(--font-mono);
  font-size: 13.5px;
  word-break: break-word;
}
.trace-result { color: var(--muted); font-size: 13px; }

.trace-answer {
  display: flex;
  gap: 12px;
  margin-top: 12px;
  padding: 14px;
  border: 1px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--surface);
}
.trace-answer .trace-kind { color: var(--accent); }
.trace-answer .trace-body {
  font-family: var(--font);
  font-size: 15px;
  line-height: 1.6;
}

.demo-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
}
.run-button {
  background: var(--accent);
  color: var(--bg);
  border: 0;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 15px;
  font-family: var(--font);
  cursor: pointer;
}
.run-button:hover:not(:disabled) { background: var(--accent-dim); }
.run-button:disabled { opacity: 0.55; cursor: default; }
.reset-button {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 15px;
  font-family: var(--font);
  cursor: pointer;
}
.reset-button:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.reset-button:disabled { opacity: 0.5; cursor: default; }
.demo-note {
  margin: 0 0 0 auto;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 760px) {
  .workflow-picker { grid-template-columns: 1fr; }
  .trace-kind { width: 72px; }
  .demo-note { margin-left: 0; }
}
</style>
