<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HeroSection from './components/HeroSection.vue'
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
      <section id="capabilities" aria-label="Capabilities"><!-- Build 3: CapabilitiesSection --></section>
      <section id="systems" aria-label="Systems"><!-- Build 4: SystemsSection (interactive agent-run demo) --></section>
      <section id="proof" aria-label="Proof"><!-- Build 5: ProofSection (case studies) --></section>
      <section id="model" aria-label="Model"><!-- Build 6: ModelSection (solo principal vs agency) --></section>
      <section id="writing" aria-label="Writing"><!-- Build 7: WritingSection (engineering notes) --></section>
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
