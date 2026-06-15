import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three')) return 'three'
          if (id.includes('/node_modules/@tresjs/core')) return 'tresjs'
          if (id.includes('/node_modules/gsap')) return 'gsap'
          if (id.includes('/node_modules/@vueuse/core')) return 'vueuse'
          if (id.includes('/node_modules/@vueuse/motion')) return 'vueuse'
        },
      },
    },
  },
})
