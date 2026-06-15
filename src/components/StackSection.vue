<script setup lang="ts">
import { ref } from 'vue'

interface StackCategory {
  title: string
  items: string[]
}

const stackCategories = ref<StackCategory[]>([
  {
    title: 'FRONTEND',
    items: ['Vue 3', 'TypeScript', 'Tailwind v4', 'Vite'],
  },
  {
    title: 'BACKEND',
    items: ['FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DATA/AI',
    items: ['Python', 'LangGraph', 'Qdrant', 'LlamaIndex'],
  },
  {
    title: 'INFRA',
    items: ['Docker', 'Terraform', 'Cloudflare', 'DigitalOcean'],
  },
  {
    title: 'TOOLS',
    items: ['n8n', 'Doppler', 'Datadog', 'Sentry'],
  },
])
</script>

<template>
  <section id="stack" class="w-full border-b border-border px-base_padding py-20 md:px-[88px]">
    <div class="mx-auto w-full max-w-7xl">
      <!-- Section Header Pattern -->
      <div class="mb-16 flex items-center gap-4 font-label-md select-none">
        <h2 class="m-0 text-[10px] font-normal tracking-[0.14em] text-acid uppercase">
          03 — STACK
        </h2>
        <div class="h-px flex-grow bg-border"></div>
      </div>

      <!-- Brutalist Monospaced List -->
      <div class="flex flex-col border-t border-border">
        <div
          v-for="category in stackCategories"
          :key="category.title"
          class="grid grid-cols-1 items-center border-b border-border py-6 font-label-md select-none md:grid-cols-12"
        >
          <!-- Left Column (Category) -->
          <div class="mb-2 text-[12px] font-bold tracking-[0.14em] text-acid md:col-span-3 md:mb-0">
            {{ category.title }}
          </div>

          <!-- Right Column (Stack Items) -->
          <div class="font-body-md text-[12px] leading-relaxed text-fg md:col-span-9">
            <template v-for="(item, idx) in category.items" :key="item">
              <span class="cursor-default transition-colors duration-100 hover:text-acid">{{
                item
              }}</span>
              <span v-if="idx < category.items.length - 1" class="mx-2 text-muted">·</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
