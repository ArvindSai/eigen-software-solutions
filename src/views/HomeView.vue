<script setup>
import HeroSection from '../components/HeroSection.vue'
import CapabilitiesSection from '../components/CapabilitiesSection.vue'
import SystemsSection from '../components/SystemsSection.vue'
import ProofSection from '../components/ProofSection.vue'
import ModelSection from '../components/ModelSection.vue'
import StartSection from '../components/StartSection.vue'
</script>

<template>
  <!--
    Home page: every section that stays on the single landing page.
    Writing moved to /writing; About lands on /about.
  -->
  <section id="hero" aria-label="Hero"><HeroSection /></section>
  <section id="capabilities" aria-label="Capabilities"><CapabilitiesSection /></section>
  <section id="systems" aria-label="Systems"><SystemsSection /></section>
  <section id="proof" aria-label="Proof"><ProofSection /></section>
  <section id="model" aria-label="Model"><ModelSection /></section>
  <section id="start" aria-label="Start"><StartSection /></section>
</template>
