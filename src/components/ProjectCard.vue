<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

interface Project {
  title: string
  status: 'EN COURS' | 'TERMINÉ' | 'ACTIF'
  description: string
  colSpan: string
  index: string
  githubUrl: string
  demoUrl?: string
}

defineProps<{
  project: Project
}>()

const cardRef = ref<HTMLElement | null>(null)
const { elementX, elementY, elementWidth, elementHeight, isOutside } = useMouseInElement(cardRef)

// Dynamic 3D tilt transforms
const cardStyle = computed(() => {
  if (isOutside.value) {
    return {
      transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.2s ease-out',
    }
  }

  const maxRotation = 8 // Maximum rotation angle in degrees
  const rotateX = -(elementY.value / elementHeight.value - 0.5) * maxRotation
  const rotateY = (elementX.value / elementWidth.value - 0.5) * maxRotation

  return {
    transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.02s linear', // Near-instant brutalist feedback
  }
})
</script>

<template>
  <div
    ref="cardRef"
    :style="cardStyle"
    :class="[
      project.colSpan,
      'group relative transform-gpu cursor-default overflow-hidden border border-border bg-bg-elevated p-6 transition-all duration-0 hover:acid-glow-active md:p-8',
    ]"
  >
    <!-- Top left accent bar: 2px x 36px acid green -->
    <div class="absolute top-0 left-0 h-[2px] w-[36px] bg-acid"></div>

    <!-- Index number and header -->
    <div class="mb-16 flex items-start justify-between">
      <div class="flex flex-col gap-1">
        <span class="font-body-md text-[9px] text-muted select-none">{{ project.index }}</span>
        <h3
          class="font-headline-lg text-[20px] font-semibold text-fg transition-none group-hover:text-acid"
        >
          {{ project.title }}
        </h3>
      </div>

      <!-- Custom Tag design -->
      <span
        :class="[
          project.status === 'ACTIF'
            ? 'border border-acid bg-acid font-bold text-bg'
            : project.status === 'EN COURS'
              ? 'border border-acid bg-acid-flat text-acid'
              : 'border border-border text-muted',
          'px-2 py-0.5 font-label-md text-[9px] tracking-[0.1em] uppercase',
        ]"
      >
        {{ project.status }}
      </span>
    </div>

    <!-- Card Content -->
    <p class="mb-6 font-body-md text-[11px] leading-relaxed text-muted">
      {{ project.description }}
    </p>

    <!-- Card Action Buttons -->
    <div class="mt-8 flex flex-wrap gap-3 select-none">
      <!-- GitHub Button -->
      <a
        :href="project.githubUrl"
        target="_blank"
        class="flex items-center border border-border px-3 py-1.5 font-label-md text-[9px] font-bold tracking-[0.1em] text-fg uppercase transition-none hover:border-acid hover:text-acid"
      >
        GITHUB
      </a>

      <!-- Demo Button (rendered only if demoUrl exists) -->
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        class="flex items-center gap-1 border border-acid bg-acid px-3 py-1.5 font-label-md text-[9px] font-bold tracking-[0.1em] text-bg uppercase transition-none hover:bg-transparent hover:text-acid"
      >
        <span>VISITER</span>
        <span class="material-symbols-outlined text-[10px] font-bold">arrow_forward</span>
      </a>
    </div>
  </div>
</template>
