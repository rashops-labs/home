# rashops labs // experimental zone

> [!WARNING]
> warning: dangerous levels of high-fidelity engineering ahead. enter at your own risk. this is not a boring portfolio. it is a playground where code is built, broken, and reassembled.

---

## what is this?

rashops.labs is the personal playground of a hybrid engineer/strategist who wanted to escape the clean, sanitized, and boring look of modern web designs. here, we embrace **acid-brutalist** aesthetics, zero CSS transitions, angular grids, and heavy terminal vibes.

this repository runs the main landing page/dashboard of the labs: [rashops-labs/home](https://github.com/rashops-labs/home).

---

## technical architecture (the weapons of choice)

we don't do boring stacks. here's how we run the lab:

- **runtime & package manager**: [bun](https://bun.sh/) — because waiting for package installation is for people with too much time.
- **frontend powerhouse**: [vue 3](https://vuejs.org/) (composition api + script setup) — high reactive performance.
- **bundling**: [vite 8](https://vite.dev/) — near-zero startup time.
- **styling**: [tailwind css v4](https://tailwindcss.com/) — cutting edge styling system.
- **3d / graphics**: [three.js](https://threejs.org/) & [tresjs](https://tresjs.org/) — for that gorgeous interactive torus knot rendering on the hero section.
- **animations**: [gsap](https://gsap.com/) & [vueuse/motion](https://motion.vueuse.org/) — micro-animations with purpose.
- **quality control**: [oxlint](https://github.com/oxc-project/oxc) (blazing fast linter) + [eslint](https://eslint.org/) (for advanced static analysis).
- **toolchain manager**: [volta](https://volta.sh/) — keeps the environment stable.

---

## how to boot the system

got bun? if not, go grab it. then fire up these terminal commands:

1. install all dependencies:
   ```bash
   bun install
   ```

2. fire up the dev server:
   ```bash
   bun dev
   ```

3. build for production (high-leverage, optimized bundle):
   ```bash
   bun run build
   ```

4. run linting (fast oxlint + strict eslint check):
   ```bash
   bun lint
   ```

5. format code:
   ```bash
   bun run format
   ```

---

## design principles (the acid-brutalist bible)

if it looks soft, it is wrong. here are the core design rules implemented in this site:
- **zero-latency interactions**: hover effects and clicks have no smooth transitions. state changes are instantaneous, raw, and satisfying.
- **angular and grid-based**: zero border-radius (`rounded-none`). visible border lines (`#1a1a28`) structuring the interface like a technical blueprint.
- **acid colors**: deep `#060609` background mixed with eye-burning `#aaff00` electric acid green.
- **interactive parallax**: mouse movements bend and rotate the 3d wireframe torus knot, making the landing page feel alive.
