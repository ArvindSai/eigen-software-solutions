<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HeroSection from './components/HeroSection.vue'
import CapabilitiesSection from './components/CapabilitiesSection.vue'
import SystemsSection from './components/SystemsSection.vue'
import ProofSection from './components/ProofSection.vue'
import ModelSection from './components/ModelSection.vue'
import WritingSection from './components/WritingSection.vue'
import StartSection from './components/StartSection.vue'
</script>

<template>
  <div id="top" class="app-shell">
    <SiteHeader />
    <!--
      Build 1: base layout / middle content shell ONLY.
      Mount points for every future section, in build order.
      Each build replaces its comment with that section's component.
      Sections render nothing until their build lands.
      Testimonials / writing notes also live inside this shell.
    -->
    <main class="content-shell">
      <section id="hero" aria-label="Hero"><HeroSection /></section>
      <section id="capabilities" aria-label="Capabilities"><CapabilitiesSection /></section>
      <section id="systems" aria-label="Systems"><SystemsSection /></section>
      <section id="proof" aria-label="Proof"><ProofSection /></section>
      <section id="model" aria-label="Model"><ModelSection /></section>
      <section id="writing" aria-label="Writing"><WritingSection /></section>
      <section id="start" aria-label="Start"><!-- Build 8: StartSection (scoping form / contact) --></section>
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
