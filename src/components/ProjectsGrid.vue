<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

interface Project {
  title: string
  status: 'EN COURS' | 'TERMINÉ' | 'ACTIF'
  description: string
  colSpan: string
  index: string
  githubUrl: string
  demoUrl?: string
}

const projects = ref<Project[]>([
  {
    index: '/001',
    title: 'Eventry',
    status: 'EN COURS',
    description:
      "Plateforme de gestion d'événements haute performance. Architecture microservices et interface réactive.",
    colSpan: 'md:col-span-8',
    githubUrl: 'https://github.com/rashops-labs/eventry',
  },
  {
    index: '/002',
    title: 'FinPulse AI',
    status: 'TERMINÉ',
    description:
      "Analyse prédictive de marchés financiers propulsée par des modèles d'apprentissage profond.",
    colSpan: 'md:col-span-4',
    githubUrl: 'https://github.com/rashops-labs/finpulse-ai',
    demoUrl: 'https://finpulse.rashlabs.dev',
  },
  {
    index: '/003',
    title: 'RashOps Labs',
    status: 'ACTIF',
    description: "Ce système même. Laboratoire de design et d'ingénierie UI/UX.",
    colSpan: 'md:col-span-4',
    githubUrl: 'https://github.com/rashops-labs/home',
    demoUrl: 'https://rashlabs.dev',
  },
  {
    index: '/004',
    title: 'OpenClaw',
    status: 'EN COURS',
    description:
      "Outil CLI open-source pour le scraping distribué et l'extraction de données structurées.",
    colSpan: 'md:col-span-8',
    githubUrl: 'https://github.com/rashops-labs/openclaw',
  },
])
</script>

<template>
  <section id="projects" class="w-full border-b border-border px-base_padding py-20 md:px-[88px]">
    <div class="mx-auto w-full max-w-7xl">
      <!-- Section Header Pattern -->
      <div class="mb-16 flex items-center gap-4 font-label-md select-none">
        <span class="text-[10px] tracking-[0.14em] text-acid uppercase">02 — PROJETS</span>
        <div class="h-px flex-grow bg-border"></div>
      </div>

      <!-- Asymmetric masonry grid layout -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-grid_unit">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>
