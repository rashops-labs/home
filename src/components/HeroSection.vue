<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useMouse } from '@vueuse/core'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let animationFrameId: number | null = null

// Use @vueuse/core for mouse tracking
const { x: mouseX, y: mouseY } = useMouse()

onMounted(() => {
  if (!containerRef.value) return

  const container = containerRef.value
  let width = container.clientWidth || window.innerWidth
  let height = container.clientHeight || window.innerHeight

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 3

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Create Torus Knot geometry
  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
  const material = new THREE.MeshBasicMaterial({
    color: 0xaaff00,
    wireframe: true,
    transparent: true,
    opacity: 0.8,
  })

  const torusKnot = new THREE.Mesh(geometry, material)
  scene.add(torusKnot)

  // Layered glow mesh
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xaaff00,
    wireframe: true,
    transparent: true,
    opacity: 0.2,
  })
  const glowMesh = new THREE.Mesh(geometry, glowMaterial)
  glowMesh.scale.multiplyScalar(1.05)
  scene.add(glowMesh)

  // Resize handler
  const handleResize = () => {
    if (!containerRef.value || !renderer) return
    width = containerRef.value.clientWidth || window.innerWidth
    height = containerRef.value.clientHeight || window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', handleResize)

  let currentThemeIsLight = document.documentElement.classList.contains('light')
  if (currentThemeIsLight) {
    material.color.setHex(0x5b9900)
    glowMaterial.color.setHex(0x5b9900)
  }

  // Animate loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    // Dynamic color updates matching the current active theme
    const isLightNow = document.documentElement.classList.contains('light')
    if (isLightNow !== currentThemeIsLight) {
      currentThemeIsLight = isLightNow
      const newHex = isLightNow ? 0x5b9900 : 0xaaff00
      material.color.setHex(newHex)
      glowMaterial.color.setHex(newHex)
    }

    // Constant rotation
    torusKnot.rotation.x += 0.005
    torusKnot.rotation.y += 0.005
    glowMesh.rotation.x += 0.005
    glowMesh.rotation.y += 0.005

    // Mouse parallax mapping relative to center of screen
    const relativeX = (mouseX.value - window.innerWidth / 2) / (window.innerWidth / 2)
    const relativeY = (mouseY.value - window.innerHeight / 2) / (window.innerHeight / 2)

    // Interpolation (lerp)
    torusKnot.position.x += (relativeX * 0.8 - torusKnot.position.x) * 0.05
    torusKnot.position.y += (-relativeY * 0.8 - torusKnot.position.y) * 0.05
    glowMesh.position.x = torusKnot.position.x
    glowMesh.position.y = torusKnot.position.y

    if (renderer) {
      renderer.render(scene, camera)
    }
  }

  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    if (renderer) {
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  })
})
</script>

<template>
  <section
    id="build"
    class="relative flex min-h-[100vh] w-full flex-col items-start justify-center overflow-hidden border-b border-border px-base_padding py-20 md:px-[88px]"
  >
    <!-- 3D Background Canvas Container -->
    <div
      ref="containerRef"
      class="pointer-events-none absolute inset-0 z-0 h-full w-full bg-transparent"
    ></div>

    <!-- Radial Glow overlay -->
    <div
      class="pointer-events-none absolute bottom-0 left-1/2 z-0 h-96 w-3/4 -translate-x-1/2 rounded-full bg-acid-glow blur-[150px]"
    ></div>

    <div class="relative z-10 mx-auto mt-12 w-full max-w-7xl">
      <!-- Eyebrow -->
      <div class="mb-8 flex items-center gap-2 select-none">
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-acid"></span>
        <span class="font-label-md text-[9px] tracking-[0.14em] text-acid uppercase"
          >LABO ACTIF — ÎLE-DE-FRANCE, FR</span
        >
      </div>

      <!-- Cascading Headlines with strict style spacing -->
      <h1 class="mb-12 flex flex-col select-none">
        <span
          class="block text-left font-display-lg text-[42px] leading-[0.88] font-bold tracking-[-0.04em] text-fg uppercase sm:text-[64px] md:text-[96px]"
        >
          CONSTRUIRE
        </span>
        <span
          class="ml-[20px] block text-left font-display-lg text-[42px] leading-[0.88] font-bold tracking-[-0.04em] text-acid uppercase sm:ml-[40px] sm:text-[64px] md:ml-[80px] md:text-[96px]"
        >
          CASSER
        </span>
        <span
          class="mt-4 ml-[40px] block text-left font-display-lg text-[22px] leading-[0.88] font-bold text-outline uppercase sm:ml-[80px] sm:text-[32px] md:ml-[180px] md:text-[46px]"
        >
          RECOMMENCER
        </span>
      </h1>

      <!-- Description with left border -->
      <div class="mb-12 max-w-[380px] border-l-2 border-acid pl-4">
        <p class="font-body-md text-[11px] leading-relaxed text-fg/75">
          Design system expérimental. Brutalisme numérique. Exploration des limites de l'interface
          utilisateur. Focus sur l'utilitaire brut et l'esthétique terminale. Aucun compromis.
        </p>
      </div>

      <!-- Brutalist instant buttons -->
      <div class="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
        <a
          href="#projects"
          class="group flex items-center justify-between border border-acid bg-acid px-8 py-4 font-label-lg text-[10px] font-bold tracking-[0.1em] text-bg transition-none hover:bg-transparent hover:text-acid"
        >
          <span>EXPLORER LES PROJETS</span>
          <span
            class="material-symbols-outlined ml-4 transition-transform group-hover:translate-x-1"
            >arrow_forward</span
          >
        </a>
      </div>
    </div>

    <!-- Technical Coordinates block bottom-right -->
    <div
      class="absolute right-base_padding bottom-16 z-10 hidden text-right font-label-md text-[9px] tracking-[0.1em] select-none md:right-[88px] lg:block"
    >
      <div class="mb-1 text-fg">LAT &nbsp;48.8566° N</div>
      <div class="mb-1 text-fg">LNG &nbsp;2.3522° E</div>
      <div class="my-2 h-px w-full bg-border"></div>
      <div class="mb-1 text-muted">PROJETS &nbsp;∞</div>
      <div class="text-acid">STATUS &nbsp;ONLINE</div>
    </div>

    <!-- Bottom status bar -->
    <div
      class="bg-surface absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-border px-base_padding py-2 font-label-md text-[9px] tracking-[0.1em] select-none"
    >
      <span class="text-fg">RASHOPS.LABS / PROD</span>
      <span class="hidden text-muted md:block">
        STACK Vue 3 · Vite 8 · TW4 · BUILD 2026 · © RASHOPS
      </span>
      <span class="blink text-acid">BUILD 2026</span>
    </div>
  </section>
</template>
