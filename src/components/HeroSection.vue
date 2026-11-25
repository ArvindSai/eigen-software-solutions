<template>
  <div class="hero">
    <div class="container">
      <p class="hero-status">
        <span class="status-dot" aria-hidden="true"></span>
        Accepting new engagements / Q1 2027 build slots
      </p>

      <h1 class="hero-title">
        AI systems that <span class="accent">do the work</span>, not demos
        that describe it.
      </h1>

      <p class="hero-lede">
        Eigen Software Solutions designs and ships autonomous agents,
        enterprise workflow integrations, knowledge engines and full-stack
        AI products — end to end, by a single principal engineer who owns
        the outcome.
      </p>

      <div class="hero-cta">
        <a href="#start" class="cta-primary">Start a project</a>
        <a href="#proof" class="cta-secondary">See the proof</a>
      </div>

      <dl class="hero-facts">
        <div class="fact">
          <dt>Engagement</dt>
          <dd>Direct, 1:1</dd>
        </div>
        <div class="fact">
          <dt>First prototype</dt>
          <dd>~2 weeks</dd>
        </div>
        <div class="fact">
          <dt>Client data</dt>
          <dd>Never trained on</dd>
        </div>
        <div class="fact">
          <dt>Ownership</dt>
          <dd>Your code, your cloud</dd>
        </div>
      </dl>

      <p class="hero-ticker" aria-label="Capabilities at a glance">
        Agents <span aria-hidden="true">·</span> Tool calling
        <span aria-hidden="true">·</span> RAG
        <span aria-hidden="true">·</span> Evals
        <span aria-hidden="true">·</span> Integrations
        <span aria-hidden="true">·</span> Full-stack
      </p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  padding: var(--space-section) 0 calc(var(--space-section) * 0.75);
  border-bottom: 1px solid var(--border);
}

.hero-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 24px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg-raised);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--muted);
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  flex: none;
}

.hero-title {
  margin: 0 0 20px;
  max-width: 820px;
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.accent { color: var(--accent); }

.hero-lede {
  margin: 0 0 32px;
  max-width: 720px;
  font-size: 18px;
  line-height: 1.65;
  color: var(--muted);
}

.hero-cta { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
.cta-primary {
  background: var(--accent);
  color: var(--bg);
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 15px;
}
.cta-primary:hover { background: var(--accent-dim); color: var(--bg); }
.cta-secondary {
  border: 1px solid var(--border);
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 15px;
}
.cta-secondary:hover { border-color: var(--accent); color: var(--accent); }

.hero-facts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0 0 40px;
  padding: 24px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.fact dt {
  margin-bottom: 4px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.fact dd { margin: 0; font-weight: 600; font-size: 15px; }

.hero-ticker {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--muted);
}
.hero-ticker span { color: var(--accent); padding: 0 2px; }

@media (max-width: 760px) {
  .hero-facts { grid-template-columns: repeat(2, 1fr); }
  .hero-lede { font-size: 16px; }
}
</style>
