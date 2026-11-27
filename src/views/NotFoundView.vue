<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found section">
    <div class="container">
      <p class="section-label">404</p>
      <h1 class="not-found-title">Page not found.</h1>
      <p class="not-found-body">
        This address doesn't exist on the Eigen site. It may have moved, or
        the link may have a typo.
      </p>
      <p class="not-found-cta">
        <RouterLink to="/" class="not-found-link">Back to the home page →</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  border-bottom: 1px solid var(--border);
}

.not-found-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.not-found-body {
  margin: 0 0 32px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.not-found-cta { margin: 0; }
.not-found-link {
  display: inline-block;
  color: var(--bg);
  background: var(--accent);
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
}
.not-found-link:hover { background: var(--accent-dim); color: var(--bg); }
</style>
