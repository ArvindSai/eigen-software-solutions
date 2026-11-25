<template>
  <div class="capabilities section">
    <div class="container">
      <p class="section-label">01 // Capabilities</p>

      <h2 class="capabilities-title">Four ways AI becomes infrastructure.</h2>

      <p class="capabilities-intro">
        Every engagement ships working software into your environment — with
        tests, monitoring and documentation your team can own.
      </p>

      <div class="capabilities-grid">
        <article class="capability">
          <p class="capability-index" aria-hidden="true">01</p>
          <h3 class="capability-title">Autonomous agents</h3>
          <p class="capability-body">
            Agents that plan, call tools and finish multi-step work — with
            guardrails and a human in the loop where it counts.
          </p>
          <p class="capability-tags">Tool calling <span aria-hidden="true">·</span> Evals</p>
        </article>

        <article class="capability">
          <p class="capability-index" aria-hidden="true">02</p>
          <h3 class="capability-title">Enterprise workflow integrations</h3>
          <p class="capability-body">
            AI wired into the systems you already run — typed tools, dry-run
            modes and full traceability from input to action.
          </p>
          <p class="capability-tags">Integrations <span aria-hidden="true">·</span> Tool calling</p>
        </article>

        <article class="capability">
          <p class="capability-index" aria-hidden="true">03</p>
          <h3 class="capability-title">Knowledge engines</h3>
          <p class="capability-body">
            Search and Q&amp;A over your internal documents, grounded in
            sources, permission-aware, and measured against a golden set.
          </p>
          <p class="capability-tags">RAG <span aria-hidden="true">·</span> Evals</p>
        </article>

        <article class="capability">
          <p class="capability-index" aria-hidden="true">04</p>
          <h3 class="capability-title">Full-stack AI products</h3>
          <p class="capability-body">
            End-to-end products from first prototype to production handover —
            tested, monitored and documented so your team can own them.
          </p>
          <p class="capability-tags">Full-stack <span aria-hidden="true">·</span> Integrations</p>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.capabilities {
  border-bottom: 1px solid var(--border);
}

.capabilities-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.capabilities-intro {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.capability {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.capability-index {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.capability-title {
  margin: 0 0 10px;
  font-size: 19px;
  line-height: 1.3;
  font-weight: 650;
}

.capability-body {
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 1.65;
  color: var(--muted);
}

.capability-tags {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--muted);
}
.capability-tags span { color: var(--accent); padding: 0 2px; }

@media (max-width: 760px) {
  .capabilities-grid { grid-template-columns: 1fr; }
  .capability { padding: 24px; }
}
</style>
