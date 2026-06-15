<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { gsap } from 'gsap'

const headerRef = ref<HTMLElement | null>(null)
const isDark = useDark({
  initialValue: 'dark',
  storageKey: 'theme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleTheme = useToggle(isDark)

const isMenuOpen = ref(false)

onMounted(() => {
  const handleScroll = () => {
    if (!headerRef.value) return
    const scrollY = window.scrollY
    if (scrollY > 50) {
      gsap.to(headerRef.value, {
        backgroundColor: isDark.value ? 'rgba(13, 13, 22, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderBottomColor: 'var(--color-border)',
        duration: 0.3,
        overwrite: 'auto',
      })
    } else {
      gsap.to(headerRef.value, {
        backgroundColor: 'rgba(6, 6, 9, 0)',
        borderBottomColor: 'rgba(26, 26, 40, 0)',
        duration: 0.3,
        overwrite: 'auto',
      })
    }
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <header
    ref="headerRef"
    class="text-label-lg fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-transparent bg-transparent px-base_padding py-4 font-label-lg text-acid backdrop-blur-sm"
  >
    <!-- Logo with blinking underscore -->
    <div
      class="z-50 flex items-center gap-0.5 font-display-lg text-[20px] font-bold tracking-tight text-fg uppercase"
    >
      <span>RASHOPS.LABS</span><span class="blink text-acid">_</span>
    </div>

    <!-- Uppercase monospaced navigation links (Desktop) -->
    <nav class="hidden items-center space-x-grid_unit md:flex">
      <a
        class="border-b-2 border-acid px-2 py-1 font-label-md text-[9px] font-bold tracking-[0.14em] text-acid uppercase transition-none hover:bg-acid hover:text-bg"
        href="#build"
        >HOME</a
      >
      <a
        class="px-2 py-1 font-label-md text-[9px] tracking-[0.14em] text-muted uppercase transition-none hover:bg-acid hover:text-bg"
        href="#projects"
        >PROJETS</a
      >
      <a
        class="px-2 py-1 font-label-md text-[9px] tracking-[0.14em] text-muted uppercase transition-none hover:bg-acid hover:text-bg"
        href="#stack"
        >STACK</a
      >
      <a
        class="px-2 py-1 font-label-md text-[9px] tracking-[0.14em] text-muted uppercase transition-none hover:bg-acid hover:text-bg"
        href="#portfolio"
        >CONTACT</a
      >
      <a
        class="px-2 py-1 font-label-md text-[9px] tracking-[0.14em] text-muted uppercase transition-none hover:bg-acid hover:text-bg"
        href="https://github.com/rashops-labs"
        target="_blank"
        >GITHUB</a
      >
    </nav>

    <!-- Right Actions -->
    <div class="z-50 flex items-center gap-2">
      <span
        class="border border-acid bg-acid-flat px-2 py-1 font-label-md text-[9px] font-bold tracking-[0.1em] text-acid uppercase select-none"
        >v0.1.0</span
      >

      <!-- Theme Toggle button -->
      <button
        @click="() => toggleTheme()"
        class="flex cursor-pointer items-center justify-center border border-border bg-bg-elevated p-2 text-fg transition-none select-none hover:border-acid hover:text-acid"
        title="Changer de thème"
      >
        <span class="material-symbols-outlined text-[14px]">
          {{ isDark ? 'light_mode' : 'dark_mode' }}
        </span>
      </button>

      <!-- Mobile Menu Hamburger button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="flex cursor-pointer items-center justify-center border border-border bg-bg-elevated p-2 text-fg transition-none select-none hover:border-acid hover:text-acid md:hidden"
        title="Menu"
      >
        <span class="material-symbols-outlined text-[14px]">
          {{ isMenuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </div>

    <!-- Mobile Menu Drawer (Brutalist style) -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 flex h-screen w-full flex-col overflow-hidden bg-bg bg-grid-pattern grid-bg px-base_padding pt-28 text-fg select-none"
    >
      <div class="pointer-events-none absolute inset-0 z-55 scanline opacity-10"></div>

      <div class="mb-8 font-body-lg text-[12px] font-bold tracking-[0.1em] text-acid uppercase">
        > SELECT_DESTINATION:
      </div>

      <nav
        class="flex flex-col gap-6 font-display-lg text-[28px] font-bold tracking-wider uppercase"
      >
        <a
          @click="isMenuOpen = false"
          class="flex items-center justify-between border-b border-border py-3 text-fg transition-none hover:text-acid"
          href="#build"
        >
          <span>01 // HOME</span>
          <span class="material-symbols-outlined text-[16px] text-acid">arrow_forward</span>
        </a>
        <a
          @click="isMenuOpen = false"
          class="flex items-center justify-between border-b border-border py-3 text-fg transition-none hover:text-acid"
          href="#projects"
        >
          <span>02 // PROJETS</span>
          <span class="material-symbols-outlined text-[16px] text-acid">arrow_forward</span>
        </a>
        <a
          @click="isMenuOpen = false"
          class="flex items-center justify-between border-b border-border py-3 text-fg transition-none hover:text-acid"
          href="#stack"
        >
          <span>03 // STACK</span>
          <span class="material-symbols-outlined text-[16px] text-acid">arrow_forward</span>
        </a>
        <a
          @click="isMenuOpen = false"
          class="flex items-center justify-between border-b border-border py-3 text-fg transition-none hover:text-acid"
          href="#portfolio"
        >
          <span>04 // CONTACT</span>
          <span class="material-symbols-outlined text-[16px] text-acid">arrow_forward</span>
        </a>
        <a
          @click="isMenuOpen = false"
          class="flex items-center justify-between border-b border-border py-3 text-fg transition-none hover:text-acid"
          href="https://github.com/rashops-labs"
          target="_blank"
        >
          <span>05 // GITHUB</span>
          <span class="material-symbols-outlined text-[16px] text-acid">open_in_new</span>
        </a>
      </nav>

      <!-- Mobile Drawer Technical metrics -->
      <div
        class="mt-auto mb-10 flex flex-col gap-2 font-label-md text-[9px] tracking-widest text-muted uppercase"
      >
        <div>SYS_STATUS: ACTIVE</div>
        <div>SHELL_TYPE: VUE_VITE_BUN</div>
        <div>SECURE_CONN: SHIELD_ON</div>
      </div>
    </div>
  </header>
</template>
