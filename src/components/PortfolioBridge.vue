<script setup lang="ts">
// PortfolioBridge component for RashOps Acid Lab
</script>

<template>
  <section
    id="portfolio"
    class="diagonal-clip relative flex w-full flex-col items-center justify-center overflow-hidden bg-bg-surface scanline pt-56 pb-44 text-center"
  >
    <!-- Overlay for overlay effect -->
    <div class="pointer-events-none absolute inset-0 bg-acid opacity-5 mix-blend-overlay"></div>

    <div class="relative z-10 flex max-w-4xl flex-col items-center px-base_padding">
      <!-- Label -->
      <div class="mb-10 flex items-center justify-center gap-2 font-label-md select-none">
        <h2 class="m-0 text-[10px] font-normal tracking-[0.14em] text-acid uppercase">
          04 — PASSERELLE
        </h2>
      </div>

      <!-- Large display text -->
      <h3
        class="mb-8 font-display-lg text-[40px] leading-tight font-bold tracking-wider text-fg uppercase select-none md:text-[64px]"
      >
        L'AUTRE CÔTÉ DU MIROIR
      </h3>

      <!-- Subtext -->
      <p class="mb-16 font-body-md text-[12px] tracking-[0.2em] text-muted select-none">
        Parcours académique · Expériences corporate · Data Science
      </p>

      <!-- Pulsing Glow CTA -->
      <a
        href="https://rayhan-touboui.tech"
        target="_blank"
        class="group inline-block transform-gpu border-2 border-acid bg-transparent px-12 py-6 font-label-lg text-[12px] font-bold text-acid acid-glow transition-none hover:bg-acid hover:text-bg active:scale-95"
      >
        <span class="flex items-center gap-2 tracking-[0.1em] uppercase">
          VOIR LE PORTFOLIO
          <span
            class="material-symbols-outlined transition-transform duration-100 group-hover:translate-x-1"
          >
            arrow_forward
          </span>
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.diagonal-clip {
  /* Create an asymmetric diagonal top separator */
  clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%);
  margin-top: -40px; /* pull up to blend with the visible grid */
}
@media (min-width: 768px) {
  .diagonal-clip {
    clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
    margin-top: -80px;
  }
}
</style>
