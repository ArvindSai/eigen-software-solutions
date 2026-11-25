<script setup>
// Writing section — engineering notes & product walkthroughs (Build 7).
// All copy below is verbatim from the preview's Writing section
// (label, heading, intro, and each note's date, read time, type,
// title and description).
// No images or other assets appear in the preview's Writing section,
// so the section is text-only by design.

const NOTES = [
  {
    date: 'Nov 10, 2026',
    minutes: 6,
    type: 'Engineering note',
    title: 'Tool-calling contracts: treating agent tools like public APIs',
    description:
      'Why every tool an agent can call deserves a typed schema, an idempotency key and a dry-run mode — and how that turns flaky demos into systems you can operate.',
  },
  {
    date: 'Oct 22, 2026',
    minutes: 5,
    type: 'Engineering note',
    title: 'Write the evals before you tune retrieval',
    description:
      'A practical loop for knowledge engines: a golden question set, retrieval and answer metrics tracked separately, and regressions caught before they reach users.',
  },
  {
    date: 'Sep 30, 2026',
    minutes: 7,
    type: 'Product walkthrough',
    title: 'Walkthrough: an inbox triage agent, from scoping to production',
    description:
      'How a support-inbox agent is scoped, built and rolled out in stages — shadow mode, human approval, then autonomy on the categories that earned it.',
  },
]
</script>

<template>
  <div class="writing section">
    <div class="container">
      <p class="section-label">05 // Writing</p>

      <h2 class="writing-title">Engineering notes &amp; product walkthroughs.</h2>

      <p class="writing-intro">
        How production AI systems are actually built — the decisions,
        trade-offs and failure modes.
      </p>

      <div class="notes-grid">
        <article v-for="note in NOTES" :key="note.title" class="note-card">
          <p class="note-meta">
            <span>{{ note.date }}</span>
            <span aria-hidden="true">·</span>
            <span>{{ note.minutes }} min</span>
            <span class="note-type">{{ note.type }}</span>
          </p>
          <h3 class="note-title">{{ note.title }}</h3>
          <p class="note-description">{{ note.description }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.writing {
  border-bottom: 1px solid var(--border);
}

.writing-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.writing-intro {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.note-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.note-meta {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.note-type {
  color: var(--accent);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 2px 8px;
}

.note-title {
  margin: 0;
  font-size: 19px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  font-weight: 650;
}

.note-description {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 900px) {
  .notes-grid { grid-template-columns: 1fr; }
}
</style>
