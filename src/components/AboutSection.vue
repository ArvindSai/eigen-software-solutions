<script setup>
// About section — the principal behind Eigen (Task 3).
// Copy is drawn only from what is already on the site or confirmed:
// the company description, the hero and Model copy, and the name story.
// Experience, business number, address and photo are NOT here yet —
// they get added once Arvind provides them. Nothing is invented.
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about section">
    <div class="container">
      <p class="section-label">About</p>

      <h2 class="about-title">One principal. The work, owned end to end.</h2>

      <p class="about-intro">
        Eigen Software Solutions is Arvind, a solo principal engineer. I
        design and ship AI systems — autonomous agents, enterprise workflow
        integrations, knowledge engines, and full-stack AI products — and I
        stay accountable for them from first call to production handover.
      </p>

      <h3 class="about-subhead">Why Eigen</h3>
      <p class="about-body">
        In linear algebra, an eigenvector is a direction a transformation
        preserves — the axis it turns around. Eigen is named for that idea:
        find the direction that matters, and build along it.
      </p>

      <h3 class="about-subhead">How I work</h3>
      <ul class="about-list">
        <li>AI systems that do the work, not demos that describe it.</li>
        <li>One senior engineer, fully accountable, from first call to production handover.</li>
        <li>Your code, your cloud.</li>
        <li>Never used for training.</li>
      </ul>

      <p class="about-cta">
        <RouterLink to="/#start" class="about-cta-link">Scope a project →</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  border-bottom: 1px solid var(--border);
}

.about-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.about-intro {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.about-subhead {
  margin: 0 0 12px;
  max-width: 720px;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 700;
}

.about-body {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.about-list {
  margin: 0 0 40px;
  padding-left: 20px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}
.about-list li { margin-bottom: 8px; }
.about-list li:last-child { margin-bottom: 0; }

.about-cta { margin: 0; }
.about-cta-link {
  display: inline-block;
  color: var(--bg);
  background: var(--accent);
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
}
.about-cta-link:hover { background: var(--accent-dim); color: var(--bg); }
</style>
