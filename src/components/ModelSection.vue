<script setup>
// Model section — solo principal vs typical agency (Build 6).
// All copy below is verbatim from the preview's Model section
// (label, heading, intro, comparison table rows).
// No images or other assets appear in the preview's Model section,
// so the section is text-only by design.

const ROWS = [
  { label: 'Who writes your code', eigen: 'The principal', agency: 'Rotating juniors' },
  { label: 'Time to first working build', eigen: 'Days', agency: 'Weeks' },
  { label: 'Context loss between people', eigen: 'None', agency: 'Every hand-off' },
  { label: 'You own code & infra', eigen: 'Always', agency: 'Sometimes' },
]
</script>

<template>
  <div class="model section">
    <div class="container">
      <p class="section-label">04 // Model</p>

      <h2 class="model-title">The solo principal advantage.</h2>

      <p class="model-intro">
        One senior engineer, fully accountable, from first call to production
        handover.
      </p>

      <div class="model-table-wrap">
        <table class="model-table">
          <caption class="sr-only">
            How working with Eigen compares with a typical agency
          </caption>
          <thead>
            <tr>
              <th scope="col"><span class="sr-only">Aspect</span></th>
              <th scope="col" class="col-eigen">Eigen</th>
              <th scope="col">Typical agency</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in ROWS" :key="row.label">
              <th scope="row">{{ row.label }}</th>
              <td class="col-eigen">{{ row.eigen }}</td>
              <td>{{ row.agency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.model {
  border-bottom: 1px solid var(--border);
}

.model-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.model-intro {
  margin: 0 0 40px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.model-table-wrap {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  overflow-x: auto;
}

.model-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 15px;
  line-height: 1.5;
}
.model-table th,
.model-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}
.model-table thead th {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.model-table tbody tr:last-child th,
.model-table tbody tr:last-child td { border-bottom: 0; }
.model-table tbody th {
  font-weight: 600;
  color: var(--text);
}
.model-table .col-eigen {
  color: var(--accent);
}
.model-table thead .col-eigen {
  color: var(--accent);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 760px) {
  .model-table th,
  .model-table td { padding: 12px 16px; }
}
</style>
