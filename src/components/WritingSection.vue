<script setup>
// Writing section — engineering notes & product walkthroughs (Build 7).
// Notes live in src/data/notes.js, shared with the single-note pages.
// All copy is verbatim from the preview's Writing section (label, heading,
// intro, and each note's date, read time, type, title and description).
// No images or other assets appear in the preview's Writing section,
// so the section is text-only by design.
import { NOTES } from '../data/notes.js'
</script>

<template>
  <div class="writing section">
    <div class="container">
      <p class="section-label">05 // Writing</p>

      <h1 class="writing-title">Engineering notes &amp; product walkthroughs.</h1>

      <p class="writing-intro">
        How production AI systems are actually built — the decisions,
        trade-offs and failure modes.
      </p>

      <div class="notes-grid">
        <router-link
          v-for="note in NOTES"
          :key="note.slug"
          :to="`/writing/${note.slug}`"
          class="note-link"
        >
          <article class="note-card">
            <p class="note-meta">
              <span>{{ note.date }}</span>
              <span aria-hidden="true">·</span>
              <span>{{ note.minutes }} min</span>
              <span class="note-type">{{ note.type }}</span>
            </p>
            <h3 class="note-title">{{ note.title }}</h3>
            <p class="note-description">{{ note.description }}</p>
          </article>
        </router-link>
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

.note-link { display: block; }
.note-link:hover .note-card { border-color: var(--accent); }

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
