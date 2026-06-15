<script setup lang="ts">
// FooterBar component for RashOps Acid Lab
</script>

<template>
  <footer
    class="flex w-full items-center justify-between border-t border-border bg-bg px-base_padding py-6 font-label-md text-[9px] tracking-[0.1em] text-muted select-none"
  >
    <!-- Left -->
    <div class="text-[9px] uppercase">RASHOPS.LABS © 2026</div>

    <!-- Right Social Links -->
    <nav class="flex items-center space-x-6">
      <a
        class="uppercase transition-none hover:text-acid"
        href="https://github.com/rashops-labs"
        target="_blank"
        >GITHUB</a
      >
      <a
        class="uppercase transition-none hover:text-acid"
        href="https://linkedin.com/in/rayhan-touboui"
        target="_blank"
        >LINKEDIN</a
      >
      <a class="uppercase transition-none hover:text-acid" href="mailto:contact@rashlabs.dev"
        >CONTACT</a
      >
    </nav>
  </footer>
</template>
