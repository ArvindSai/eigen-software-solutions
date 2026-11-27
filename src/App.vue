<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div id="top" class="app-shell">
    <a href="#main" class="skip-link">Skip to content</a>
    <SiteHeader />
    <!--
      Router setup: pages render here. '/' is HomeView (all landing-page
      sections); /writing and /about land in their own tasks.
    -->
    <main id="main" class="content-shell">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content-shell { flex: 1; }
</style>
