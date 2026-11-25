<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <p class="footer-brand">
          <span class="brand-mark" aria-hidden="true">λ</span>
          Eigen Software Solutions
        </p>
        <p class="footer-note">
          AI agents, integrations &amp; products — end to end, by a single
          principal engineer.
        </p>
      </div>
      <p class="footer-copy">© 2026 Eigen Software Solutions. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  padding: 48px 0;
  color: var(--muted);
  font-size: 14px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-brand { color: var(--text); font-weight: 600; margin: 0 0 8px; }
.brand-mark { color: var(--accent); font-family: var(--font-mono); }
.footer-note { margin: 0; max-width: 420px; }
.footer-copy { margin: 0; }
</style>
