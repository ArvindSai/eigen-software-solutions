// Engineering notes & product walkthroughs — shared by the Writing section
// (/writing) and the single-note pages (/writing/:slug).
// All copy is verbatim from the preview's Writing section (each note's date,
// read time, type, title and description). The description is the full text
// of the note for now — full articles get added later.
export const NOTES = [
  {
    slug: 'tool-calling-contracts',
    date: 'Nov 10, 2026',
    minutes: 6,
    type: 'Engineering note',
    title: 'Tool-calling contracts: treating agent tools like public APIs',
    description:
      'Why every tool an agent can call deserves a typed schema, an idempotency key and a dry-run mode — and how that turns flaky demos into systems you can operate.',
  },
  {
    slug: 'write-the-evals-before-you-tune-retrieval',
    date: 'Oct 22, 2026',
    minutes: 5,
    type: 'Engineering note',
    title: 'Write the evals before you tune retrieval',
    description:
      'A practical loop for knowledge engines: a golden question set, retrieval and answer metrics tracked separately, and regressions caught before they reach users.',
  },
  {
    slug: 'inbox-triage-agent-walkthrough',
    date: 'Sep 30, 2026',
    minutes: 7,
    type: 'Product walkthrough',
    title: 'Walkthrough: an inbox triage agent, from scoping to production',
    description:
      'How a support-inbox agent is scoped, built and rolled out in stages — shadow mode, human approval, then autonomy on the categories that earned it.',
  },
]
