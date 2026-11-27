<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NOTES } from '../data/notes.js'
import NotFoundView from './NotFoundView.vue'

// Single-note page (Fix 11). The note's description is its full text for
// now. Navigation: breadcrumb (Home / Writing / title), a back link to the
// Writing index, and links to the most recent other notes (up to 5).
const route = useRoute()
const note = computed(() => NOTES.find((n) => n.slug === route.params.slug))
const moreNotes = computed(() =>
  NOTES.filter((n) => n.slug !== route.params.slug).slice(0, 5),
)
</script>

<template>
  <div v-if="note" class="note section">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/writing">Writing</router-link></li>
          <li aria-current="page">{{ note.title }}</li>
        </ol>
      </nav>

      <p class="note-meta">
        <span>{{ note.date }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ note.minutes }} min</span>
        <span class="note-type">{{ note.type }}</span>
      </p>

      <h1 class="note-title">{{ note.title }}</h1>

      <p class="note-body">{{ note.description }}</p>

      <p class="note-back">
        <router-link to="/writing">← All writing</router-link>
      </p>

      <section class="more-notes" aria-label="More notes">
        <h2 class="more-notes-title">More notes</h2>
        <ul class="more-notes-list">
          <li v-for="other in moreNotes" :key="other.slug">
            <router-link :to="`/writing/${other.slug}`">
              {{ other.title }}
              <span class="more-notes-date">{{ other.date }}</span>
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
  <NotFoundView v-else />
</template>

<style scoped>
.note {
  border-bottom: 1px solid var(--border);
}

.breadcrumb {
  margin: 0 0 24px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
}
.breadcrumb ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.breadcrumb li + li::before {
  content: "/";
  margin-right: 8px;
  color: var(--muted);
}
.breadcrumb a { color: var(--muted); }
.breadcrumb a:hover { color: var(--accent); }
.breadcrumb li[aria-current="page"] { color: var(--text); }

.note-meta {
  margin: 0 0 16px;
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
  margin: 0 0 20px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.note-body {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.note-back { margin: 0 0 48px; }
.note-back a { color: var(--accent); font-weight: 600; }

.more-notes {
  border-top: 1px solid var(--border);
  padding-top: 32px;
}
.more-notes-title {
  margin: 0 0 16px;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 700;
}
.more-notes-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.more-notes-list a { font-weight: 600; font-size: 16px; }
.more-notes-date {
  display: block;
  margin-top: 2px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  color: var(--muted);
}
</style>
