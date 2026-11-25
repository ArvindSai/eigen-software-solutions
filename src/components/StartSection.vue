<script setup>
import { computed, reactive, ref } from 'vue'

// Start section — scoping form (Build 8).
// Heading, intro, the three outcome steps, the "Book a call directly"
// line, the step labels and the Step 1 field labels are verbatim from
// the preview's Start section. The four trust cards are verbatim too.
//
// FLAGGED — reconstructed, not exposed by the preview's text:
//   * Step 2 (Constraints) and Step 3 (Contact) field labels: the preview
//     exposes only the step names, so the fields below are the standard
//     scoping-form fields for those steps.
//   * The "Book a call directly" link points at https://cal.com — the
//     preview names the cal.com domain but no specific booking URL.
//   * Submit: there is no backend and the preview publishes no contact
//     email, so the form cannot send anywhere. Submitting shows a
//     client-side confirmation state only. Wiring a real destination
//     (email / form endpoint) is an open decision for Arvind.

const STEPS = [
  { id: 1, label: 'Scope' },
  { id: 2, label: 'Constraints' },
  { id: 3, label: 'Contact' },
]

const OUTCOMES = [
  'Written reply with a recommended approach',
  'Optional 30-min scoping call',
  'Proposal with scope & timeline',
]

const TRUST = [
  {
    title: 'Never used for training',
    body: 'Your data, prompts and outputs are never used to train or fine-tune any model — ours or a vendor’s.',
  },
  {
    title: 'Your cloud, your keys',
    body: 'Systems are deployed into your environment with your model provider accounts wherever possible.',
  },
  {
    title: 'Least-privilege access',
    body: 'Scoped, revocable credentials for the duration of the engagement only.',
  },
  {
    title: 'NDA by default',
    body: 'Every engagement starts under NDA. Nothing about your project is shared without permission.',
  },
]

const BUDGETS = ['', 'Under $10k', '$10k – $25k', '$25k – $50k', '$50k – $100k', '$100k+']
const TIMELINES = ['', 'ASAP', 'Within 1 month', '1–3 months', '3+ months', 'Exploring']

const step = ref(1)
const submitted = ref(false)
const errors = reactive({})

const form = reactive({
  project: '',
  problem: '',
  stack: '',
  budget: '',
  timeline: '',
  blockers: '',
  name: '',
  email: '',
  company: '',
})

const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))

function validateStep(n) {
  if (n === 1) {
    errors.project = form.project.trim() ? '' : 'Tell us what you are building.'
    errors.problem = form.problem.trim() ? '' : 'A few sentences on the problem.'
  }
  if (n === 3) {
    errors.name = form.name.trim() ? '' : 'Your name is required.'
    errors.email = emailValid.value ? '' : 'A valid work email is required.'
  }
  return n === 1
    ? !errors.project && !errors.problem
    : !errors.name && !errors.email
}

function next() {
  if (validateStep(step.value)) step.value += 1
}

function back() {
  step.value -= 1
}

function submit() {
  if (!validateStep(3)) return
  submitted.value = true
}

function startOver() {
  submitted.value = false
  step.value = 1
  Object.assign(form, {
    project: '',
    problem: '',
    stack: '',
    budget: '',
    timeline: '',
    blockers: '',
    name: '',
    email: '',
    company: '',
  })
}
</script>

<template>
  <div class="start section">
    <div class="container">
      <p class="section-label">06 // Start</p>

      <h2 class="start-title">Scope your project.</h2>

      <p class="start-intro">
        Three short steps. You&rsquo;ll get a written response with a
        recommended approach &mdash; and, if you like, a call to go deeper.
      </p>

      <ol class="outcomes">
        <li v-for="(outcome, i) in OUTCOMES" :key="outcome">
          <span class="outcome-num" aria-hidden="true">{{ i + 1 }}</span>
          {{ outcome }}
        </li>
      </ol>

      <p class="book-call">
        Rather skip the form?
        <a href="https://cal.com" target="_blank" rel="noopener">
          Book a call directly &rarr;
        </a>
      </p>

      <div class="form-card">
        <div v-if="!submitted">
          <ol class="stepper" aria-label="Form progress">
            <li
              v-for="s in STEPS"
              :key="s.id"
              :class="{ active: step === s.id, done: step > s.id }"
              :aria-current="step === s.id ? 'step' : undefined"
            >
              <span class="step-num" aria-hidden="true">0{{ s.id }}</span>
              {{ s.label }}
            </li>
          </ol>

          <form @submit.prevent="submit" novalidate>
            <!-- Step 1: Scope -->
            <div v-show="step === 1" class="step-panel">
              <div class="field">
                <label for="scope-project">What are you building?</label>
                <input
                  id="scope-project"
                  v-model="form.project"
                  type="text"
                  autocomplete="off"
                  :aria-invalid="!!errors.project"
                />
                <p v-if="errors.project" class="field-error" role="alert">{{ errors.project }}</p>
              </div>
              <div class="field">
                <label for="scope-problem">The problem, in a few sentences</label>
                <textarea
                  id="scope-problem"
                  v-model="form.problem"
                  rows="4"
                  :aria-invalid="!!errors.problem"
                ></textarea>
                <p v-if="errors.problem" class="field-error" role="alert">{{ errors.problem }}</p>
              </div>
              <div class="field">
                <label for="scope-stack">Current stack &amp; systems <span class="optional">(optional)</span></label>
                <input id="scope-stack" v-model="form.stack" type="text" autocomplete="off" />
              </div>
            </div>

            <!-- Step 2: Constraints -->
            <div v-show="step === 2" class="step-panel">
              <div class="field">
                <label for="constraints-budget">Budget range <span class="optional">(optional)</span></label>
                <select id="constraints-budget" v-model="form.budget">
                  <option v-for="b in BUDGETS" :key="b" :value="b">
                    {{ b || 'Select a range' }}
                  </option>
                </select>
              </div>
              <div class="field">
                <label for="constraints-timeline">Desired timeline <span class="optional">(optional)</span></label>
                <select id="constraints-timeline" v-model="form.timeline">
                  <option v-for="t in TIMELINES" :key="t" :value="t">
                    {{ t || 'Select a timeline' }}
                  </option>
                </select>
              </div>
              <div class="field">
                <label for="constraints-blockers">Anything that rules an approach out? <span class="optional">(optional)</span></label>
                <textarea id="constraints-blockers" v-model="form.blockers" rows="3"></textarea>
              </div>
            </div>

            <!-- Step 3: Contact -->
            <div v-show="step === 3" class="step-panel">
              <div class="field">
                <label for="contact-name">Your name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  :aria-invalid="!!errors.name"
                />
                <p v-if="errors.name" class="field-error" role="alert">{{ errors.name }}</p>
              </div>
              <div class="field">
                <label for="contact-email">Work email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  :aria-invalid="!!errors.email"
                />
                <p v-if="errors.email" class="field-error" role="alert">{{ errors.email }}</p>
              </div>
              <div class="field">
                <label for="contact-company">Company <span class="optional">(optional)</span></label>
                <input id="contact-company" v-model="form.company" type="text" autocomplete="organization" />
              </div>
            </div>

            <div class="form-actions">
              <button v-if="step > 1" type="button" class="btn btn-ghost" @click="back">
                Back
              </button>
              <button v-if="step < 3" type="button" class="btn btn-primary" @click="next">
                Continue
              </button>
              <button v-if="step === 3" type="submit" class="btn btn-primary">
                Send scope
              </button>
            </div>
          </form>
        </div>

        <div v-else class="confirmation" role="status">
          <p class="confirmation-title">Scope received.</p>
          <p class="confirmation-body">
            Thanks{{ form.name ? `, ${form.name}` : '' }} &mdash; your project
            scope has been noted. You&rsquo;ll get a written reply with a
            recommended approach.
          </p>
          <button type="button" class="btn btn-ghost" @click="startOver">
            Start a new scope
          </button>
        </div>
      </div>

      <div class="trust-grid">
        <div v-for="card in TRUST" :key="card.title" class="trust-card">
          <h3 class="trust-title">{{ card.title }}</h3>
          <p class="trust-body">{{ card.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.start {
  border-bottom: 1px solid var(--border);
}

.start-title {
  margin: 16px 0 16px;
  max-width: 720px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.start-intro {
  margin: 0 0 32px;
  max-width: 720px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--muted);
}

.outcomes {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
}
.outcomes li {
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-size: 16px;
}
.outcome-num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  border: 1px solid var(--border);
  border-radius: 999px;
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translateY(4px);
}

.book-call {
  margin: 0 0 40px;
  max-width: 720px;
  color: var(--muted);
  font-size: 15px;
}
.book-call a { color: var(--accent); font-weight: 600; }

.form-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: 32px;
  margin-bottom: 48px;
}

.stepper {
  list-style: none;
  margin: 0 0 28px;
  padding: 0 0 20px;
  display: flex;
  gap: 32px;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.stepper li { display: flex; align-items: center; gap: 8px; }
.step-num { color: var(--muted); }
.stepper li.active { color: var(--text); }
.stepper li.active .step-num { color: var(--accent); }
.stepper li.done { color: var(--accent); }
.stepper li.done .step-num { color: var(--accent); }

.step-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
}
.field .optional { font-weight: 400; color: var(--muted); }
.field input,
.field textarea,
.field select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-raised);
  color: var(--text);
  font-family: var(--font);
  font-size: 15px;
  line-height: 1.5;
}
.field input:focus,
.field textarea:focus,
.field select:focus {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
  border-color: var(--accent);
}
.field textarea { resize: vertical; }
.field-error {
  margin: 6px 0 0;
  font-size: 13px;
  color: #f87171;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 28px;
}
.btn {
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
}
.btn-primary { background: var(--accent); color: var(--bg); }
.btn-primary:hover { background: var(--accent-dim); }
.btn-ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

.confirmation-title {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 700;
}
.confirmation-body {
  margin: 0 0 24px;
  color: var(--muted);
  max-width: 560px;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.trust-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: 24px;
}
.trust-title {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 650;
}
.trust-body {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 760px) {
  .form-card { padding: 24px 20px; }
  .stepper { gap: 16px; flex-wrap: wrap; }
  .trust-grid { grid-template-columns: 1fr; }
}
</style>
