<template>
  <header class="site-header">
    <div class="container header-inner">
      <a href="#top" class="brand" aria-label="Eigen Software Solutions — home">
        <span class="brand-mark" aria-hidden="true">λ</span>
        <span class="brand-name">Eigen</span>
        <span class="brand-suffix">Software Solutions</span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#capabilities">Capabilities</a>
        <a href="#systems">Systems</a>
        <a href="#proof">Proof</a>
        <a href="#model">Model</a>
        <a href="#writing">Writing</a>
        <a href="#start" class="nav-cta">Start a project</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 64px;
}
.brand { display: flex; align-items: baseline; gap: 8px; }
.brand-mark {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 20px;
  line-height: 1;
}
.brand-name { font-weight: 700; font-size: 18px; letter-spacing: -0.01em; }
.brand-suffix { color: var(--muted); font-size: 13px; }
.site-nav { display: flex; align-items: center; gap: 24px; font-size: 14px; }
.site-nav a { color: var(--muted); }
.site-nav a:hover { color: var(--text); }
.nav-cta {
  color: var(--bg) !important;
  background: var(--accent);
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 600;
}
.nav-cta:hover { background: var(--accent-dim); color: var(--bg) !important; }
@media (max-width: 760px) {
  .brand-suffix, .site-nav a:not(.nav-cta) { display: none; }
}
</style>
