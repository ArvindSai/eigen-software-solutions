<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// Mobile menu state. The desktop nav hides its links under 760px, so the
// hamburger is the only way to reach the sections on a phone.
const menuOpen = ref(false)
const route = useRoute()

// Close the menu whenever navigation happens (including hash changes).
watch(
  () => route.fullPath,
  () => { menuOpen.value = false },
)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <router-link to="/" class="brand" aria-label="Eigen Software Solutions — home">
        <span class="brand-mark" aria-hidden="true">λ</span>
        <span class="brand-name">Eigen</span>
        <span class="brand-suffix">Software Solutions</span>
      </router-link>
      <nav class="site-nav" aria-label="Primary">
        <router-link to="/#capabilities">Capabilities</router-link>
        <router-link to="/#systems">Systems</router-link>
        <router-link to="/#proof">Proof</router-link>
        <router-link to="/#model">Model</router-link>
        <router-link to="/writing">Writing</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/#start" class="nav-cta">Start a project</router-link>
      </nav>
      <button
        type="button"
        class="menu-button"
        :class="{ open: menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        aria-label="Menu"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <nav
      id="mobile-nav"
      class="mobile-nav"
      aria-label="Mobile"
      v-show="menuOpen"
      @keydown.escape="menuOpen = false"
    >
      <router-link to="/#capabilities" @click="menuOpen = false">Capabilities</router-link>
      <router-link to="/#systems" @click="menuOpen = false">Systems</router-link>
      <router-link to="/#proof" @click="menuOpen = false">Proof</router-link>
      <router-link to="/#model" @click="menuOpen = false">Model</router-link>
      <router-link to="/writing" @click="menuOpen = false">Writing</router-link>
      <router-link to="/about" @click="menuOpen = false">About</router-link>
      <router-link to="/#start" class="mobile-cta" @click="menuOpen = false">Start a project</router-link>
    </nav>
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

.menu-button {
  display: none;
  width: 40px;
  height: 40px;
  flex: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
}
.menu-button span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text);
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.menu-button.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-button.open span:nth-child(2) { opacity: 0; }
.menu-button.open span:nth-child(3) { transform: translateY(-7px) rotate(45deg); }

.mobile-nav { display: none; }
.mobile-nav a {
  display: block;
  padding: 12px 0;
  color: var(--text);
  font-size: 15px;
  border-bottom: 1px solid var(--border);
}
.mobile-nav a:last-child { border-bottom: 0; }
.mobile-cta { color: var(--accent) !important; font-weight: 600; }

@media (max-width: 760px) {
  .brand-suffix, .site-nav a:not(.nav-cta) { display: none; }
  .menu-button { display: inline-flex; }
  .mobile-nav {
    border-top: 1px solid var(--border);
    padding: 8px 24px 16px;
  }
}
@media (min-width: 761px) {
  .menu-button, .mobile-nav { display: none !important; }
}
</style>
