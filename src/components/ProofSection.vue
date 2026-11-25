<script setup>
// Proof section — selected engagements (Build 5).
// All copy below is verbatim from the preview's Proof section
// (label, heading, intro, case titles, bodies, pipelines, metrics).
// No images or other assets appear in the preview's Proof section,
// so the section is text-only by design.

const CASES = [
  {
    id: 'case_01',
    tag: 'case_01 / Fintech · Series B',
    title: 'Support triage agent with grounded drafting',
    body: 'An agent that classifies every inbound ticket, drafts replies from the help center and escalates anything regulatory to a human.',
    pipeline: ['Zendesk webhooks', 'Intent classifier', 'Hybrid RAG', 'Approval queue', 'Trace store'],
    metrics: [
      { value: '62%', label: 'tickets auto-drafted' },
      { value: '4.1h → 38m', label: 'median first response' },
      { value: '0', label: 'unreviewed regulatory replies' },
    ],
  },
  {
    id: 'case_02',
    tag: 'case_02 / Logistics · Mid-market',
    title: 'Accounts-payable reconciliation pipeline',
    body: 'Document extraction and PO matching wired into NetSuite, with dry-run writes and an exceptions channel for the finance team.',
    pipeline: ['Drive ingest', 'Vision extraction', 'PO matcher', 'NetSuite API', 'Slack exceptions'],
    metrics: [
      { value: '1,900+', label: 'invoices / month processed' },
      { value: '~120h', label: 'manual work saved monthly' },
      { value: '99.2%', label: 'field extraction accuracy' },
    ],
  },
  {
    id: 'case_03',
    tag: 'case_03 / B2B SaaS · Enterprise',
    title: 'Permission-aware internal knowledge engine',
    body: 'Search and Q&A over 40k internal documents that respects source-system permissions and cites every answer.',
    pipeline: ['Confluence + Drive sync', 'ACL resolver', 'Embeddings + BM25', 'Reranker', 'Eval harness in CI'],
    metrics: [
      { value: '0.93', label: 'recall@5 on golden set' },
      { value: '<1.2s', label: 'p95 answer latency' },
      { value: '3 wks', label: 'kickoff to production' },
    ],
  },
]
</script>

<template>
  <div class="proof section">
    <div class="container">
      <p class="section-label">03 // Proof</p>

      <h2 class="proof-title">Architecture that shipped, measured in production.</h2>

      <p class="proof-intro">
        Selected engagements. Client names withheld under NDA; architecture
        and outcomes shared with permission.
      </p>

      <div class="cases">
        <article v-for="c in CASES" :key="c.id" class="case">
          <p class="case-tag">{{ c.tag }}</p>
          <h3 class="case-title">{{ c.title }}</h3>
          <p class="case-body">{{ c.body }}</p>

          <p class="case-pipeline" aria-label="Architecture">
            <span v-for="(step, i) in c.pipeline" :key="step" class="pipeline-step">
              {{ step }}<span v-if="i < c.pipeline.length - 1" class="pipeline-arrow" aria-hidden="true"> → </span>
            </span>
          </p>

          <dl class="case-metrics">
            <div v-for="m in c.metrics" :key="m.label" class="metric">
              <dt class="metric-value">{{ m.value }}</dt>
              <dd class="metric-label">{{ m.label }}</dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proof {
  border-bottom: 1px solid var(--border);
}

.proof-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.proof-intro {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.cases {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.case {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.case-tag {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.case-title {
  margin: 0 0 10px;
  font-size: 19px;
  line-height: 1.3;
  font-weight: 650;
}

.case-body {
  margin: 0 0 20px;
  max-width: 720px;
  font-size: 15px;
  line-height: 1.65;
  color: var(--muted);
}

.case-pipeline {
  margin: 0 0 24px;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-raised);
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.8;
  color: var(--text);
}
.pipeline-arrow { color: var(--accent); }

.case-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 0;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}
.metric { margin: 0; }
.metric-value {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--accent);
}
.metric-label {
  margin: 4px 0 0;
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--muted);
}

@media (max-width: 760px) {
  .case { padding: 24px; }
  .case-metrics { grid-template-columns: 1fr; gap: 12px; }
}
</style>
