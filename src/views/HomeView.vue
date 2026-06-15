<script setup lang="ts">
import TopHeader from '../components/TopHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsGrid from '../components/ProjectsGrid.vue'
import StackSection from '../components/StackSection.vue'
import PortfolioBridge from '../components/PortfolioBridge.vue'
import FooterBar from '../components/FooterBar.vue'
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-bg bg-grid-pattern grid-bg font-body-md text-fg selection:bg-acid selection:text-bg"
  >
    <!-- CRT monitor scanline overlay -->
    <div class="pointer-events-none fixed inset-0 z-50 scanline opacity-10"></div>

    <!-- Top Navigation Bar -->
    <TopHeader />

    <!-- Main Content -->
    <main class="relative z-10 w-full">
      <HeroSection />
      <ProjectsGrid />
      <StackSection />
      <PortfolioBridge />
    </main>

    <!-- Footer Status Bar -->
    <FooterBar />
  </div>
</template>
