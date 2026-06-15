# RASHOPS.LABS — Full Project Context Brief
# For: Google Stitch via Antigravity CLI (MCP)
# Author: RashOps (Rayhan Touboui)
# Version: 0.1.0 — 2026

---

## 1. PROJECT IDENTITY

### What is RashOps Labs?
RashOps Labs (`rashlabs.dev`) is a **personal experimental tech lab** — a GitHub
organization and web presence where RashOps (alias of Rayhan Touboui, dual-degree
student in Data/AI + Business based in Île-de-France, FR) builds, breaks, and
ships anything from viable projects to intentional chaos experiments.

It is **NOT a portfolio** (that lives separately at `rayhan-touboui.tech`).
It is **NOT a SaaS product**.
It is a lab — raw, opinionated, experimental.

### Relationship to Portfolio
```
rayhan-touboui.tech     → Professional portfolio (academic, corporate, Data Science)
rashlabs.dev            → Personal lab (experimental, creative, unbounded)
  ├── rashlabs.dev             → Landing page (THIS PROJECT)
  ├── eventry.rashlabs.dev     → Subdomain per project
  ├── finpulse.rashlabs.dev
  └── [project].rashlabs.dev
```

Each project lives on its own subdomain, fully decoupled.
The landing page (`rashlabs.dev`) is the hub — it lists projects, links to
subdomains, and bridges visitors toward the main portfolio.

### Infrastructure
- Domain: `rashlabs.dev` — registered via GitHub Student Pack, managed on Cloudflare
- Hosting: Cloudflare Pages (static deploys from GitHub org `rashops-labs`)
- DNS: Cloudflare (wildcard CNAME for `*.rashlabs.dev` subdomains)
- IaC: Terraform (DigitalOcean droplet + Cloudflare DNS + Firewall rules)

---

## 2. TECHNICAL STACK (Landing Page)

```json
{
  "runtime":     "Bun 1.3.x",
  "framework":   "Vue 3.5 (Composition API + <script setup>)",
  "bundler":     "Vite 8",
  "language":    "TypeScript (strict)",
  "styling":     "Tailwind CSS v4 (@tailwindcss/vite plugin — NO postcss)",
  "router":      "Vue Router 5",
  "3D":          "@tresjs/core 5.x + three.js 0.184",
  "animation":   "GSAP 3.15 (DOM/scroll) + @vueuse/motion (spring, Vue components)",
  "utils":       "@vueuse/core (mouse tracking, scroll, reactive utils)",
  "icons":       "@lucide/vue",
  "linting":     "oxlint + eslint (vue + ts) + prettier + husky + lint-staged",
  "package_mgr": "bun (NOT npm, NOT yarn, NOT pnpm)"
}
```

### Key Architectural Rules
- **NO PostCSS config** — Tailwind v4 runs as a Vite plugin only
- **CSS entry point**: `src/assets/main.css` contains only `@import "tailwindcss";`
- **Design tokens**: defined in CSS via `@theme {}` block (Tailwind v4 native), NOT in tailwind.config.js
- **3D layer** (TresJS WebGL canvas) sits BEHIND the DOM layer via CSS z-index
- **GSAP** animates DOM elements only — never Three.js meshes
- **Three.js mesh animation** handled exclusively via `useRenderLoop()` from TresJS
- **Mouse parallax** on 3D via `useMouse()` from @vueuse/core — NOT raycasting

---

## 3. DESIGN SYSTEM

### 3.1 Aesthetic Direction
```
PRIMARY AESTHETIC:   Acid / Brutalist / Experimental
ANTI-PATTERNS:       Glassmorphism, rounded corners, box-shadows,
                     SaaS polish, minimalism, pastel tones,
                     backdrop-blur on cards, gradient fills on surfaces
```

The design should feel like: **"a senior engineer who doesn't need to impress
you — the work speaks for itself."**
Intentional tension. Controlled discomfort. Aggressive typography.

### 3.2 Color Tokens (CSS custom properties)
```css
@theme {
  --color-bg:          #060609;   /* near-black, slightly purple */
  --color-bg-elevated: #0D0D16;   /* card surfaces */
  --color-bg-surface:  #141420;   /* section backgrounds */
  --color-acid:        #AAFF00;   /* PRIMARY ACCENT — electric acid green */
  --color-fg:          #EBEBDF;   /* warm off-white text */
  --color-muted:       #565666;   /* secondary text, labels */
  --color-border:      #1A1A28;   /* all borders */
  --color-danger:      #FF2D2D;   /* errors, "experimental" tags */

  /* Derived */
  --color-acid-glow:   rgba(170, 255, 0, 0.18);
  --color-acid-flat:   rgba(170, 255, 0, 0.07);
}
```

### 3.3 Typography
```
DISPLAY (headlines, section titles, logo):
  Font:     Chakra Petch
  Weights:  600, 700
  Feel:     Angular, tech-military, aggressive

BODY / LABELS / TAGS / CODE:
  Font:     JetBrains Mono
  Weights:  400, 700
  Feel:     Terminal, precise, raw

SCALE:
  Display XL  → Chakra Petch 700 / 96px / line-height 0.88
  Display LG  → Chakra Petch 700 / 64px
  Display MD  → Chakra Petch 600 / 40px
  Display SM  → Chakra Petch 600 / 24px
  Section H   → Chakra Petch 600 / 17px
  Mono Body   → JetBrains Mono 400 / 12px / line-height 1.75
  Mono Label  → JetBrains Mono 400 / 9px / letter-spacing 0.14em / UPPERCASE
```

### 3.4 Spacing & Layout Rules
```
Border radius:  0px EVERYWHERE — no exceptions
Box shadows:    NONE — use glow (box-shadow with color, 0 blur or high spread) instead
Borders:        1px solid var(--color-border) as default surface separator
Grid:           CSS background grid 44px × 44px, color #1A1A28, opacity 0.55
Glow effect:    radial-gradient from --color-acid-glow, bottom-center of hero
```

### 3.5 Component Patterns

**Buttons (NO border-radius)**
```
Primary:   background #AAFF00, text #060609, font JetBrains Mono 700 10px uppercase
Outline:   transparent bg, border 1px #AAFF00, text #AAFF00
Ghost:     transparent bg, border 1px #1A1A28, text #565666
Behavior:  NO CSS transitions — state changes are instant (brutalist principle)
```

**Tags / Badges**
```
Acid:   border #AAFF00, text #AAFF00, bg rgba(170,255,0,0.07)
Muted:  border #1A1A28, text #565666
Danger: border #FF2D2D, text #FF2D2D, bg rgba(255,45,45,0.07)
Font:   JetBrains Mono 9px uppercase, letter-spacing 0.1em
```

**Project Cards**
```
Background:  #0D0D16
Border:      1px solid #1A1A28
Top accent:  2px × 36px acid green horizontal bar (top-left corner, absolute)
Number:      "/001" — JetBrains Mono 9px muted
Title:       Chakra Petch semi-bold 17px
Description: JetBrains Mono 11px muted, line-height 1.6
Footer:      tag (status) + "→" arrow in acid green
Hover:       border becomes acid green, subtle 3D tilt via useMouseInElement
```

**Section Headers**
```
Pattern:  [ACID-GREEN LABEL] ——————————————————————→ (extends to edge)
Font:     JetBrains Mono 10px uppercase, letter-spacing 0.14em
Line:     1px solid #1A1A28 flex-grow after label
```

---

## 4. PAGE ARCHITECTURE

### 4.1 Rendering Layers
```
┌──────────────────────────────────────────────────────────┐
│  LAYER 2 — FOREGROUND DOM (z-index: 10)                  │
│  Vue 3 components, Tailwind classes, GSAP animations     │
│  Text, cards, nav, buttons, tags, section content        │
└───────────────────────────────┬──────────────────────────┘
                                │ useMouse() reactive props
┌───────────────────────────────▼──────────────────────────┐
│  LAYER 1 — BACKGROUND WebGL (z-index: 0, position:fixed) │
│  <TresCanvas> — geometric 3D object                      │
│  Torus knot or abstract particle cloud                   │
│  Acid green wireframe/glow, slow rotation                │
│  Reacts to mouse position (parallax, NOT raycasting)     │
└──────────────────────────────────────────────────────────┘
```

### 4.2 Vue Component Tree (planned)
```
App.vue
├── TheNavbar.vue
├── views/
│   └── HomeView.vue
│       ├── HeroSection.vue
│       │   ├── HeroCanvas.vue         ← TresJS 3D (background)
│       │   ├── HeroHeadline.vue       ← "CONSTRUIRE / CASSER / RECOMMENCER"
│       │   └── HeroStatusBar.vue      ← bottom metadata strip
│       ├── ProjectsSection.vue
│       │   └── ProjectCard.vue
│       ├── StackSection.vue
│       ├── PortfolioBridgeSection.vue
│       └── TheFooter.vue
└── components/
    ├── ui/
    │   ├── BaseButton.vue
    │   ├── BaseTag.vue
    │   └── SectionHeader.vue
    └── 3d/
        └── AbstractGeometry.vue       ← TresJS geometry + useRenderLoop
```

### 4.3 Animation Responsibilities
```
GSAP:              Scroll-triggered section entrances, headline stagger,
                   nav opacity on scroll, text reveal effects
@vueuse/motion:    Project card spring entrance (scroll-based),
                   card tilt on hover (spring physics)
TresJS/onLoop:     3D mesh rotation, particle movement
@vueuse/core:      useMouse → 3D parallax, useScroll → nav state
```

---

## 5. PAGE SECTIONS SPEC

### [NAV]
- Fixed, transparent → opaque `#060609CC` on scroll (GSAP)
- Logo: `RASHOPS.LABS_` — dot in acid green, underscore blinks (CSS keyframes)
- Links: JetBrains Mono 9px UPPERCASE — HOME / PROJETS / STACK / CONTACT
- Right: tag badge `v0.1.0` acid green bordered
- Bottom: 1px border `#1A1A28`

### [HERO — full viewport height]
- 3D layer behind (TresJS): torus knot wireframe in #AAFF00, floating center-right
- Eyebrow: pulsing green dot + "LABO ACTIF — ÎLE-DE-FRANCE, FR" (mono 9px)
- Headline cascade (Chakra Petch 700, ~96px):
  ```
  CONSTRUIRE         ← off-white, flush left
    CASSER           ← acid green, shifted right ~80px
      RECOMMENCER    ← transparent + text-stroke muted, shifted right ~180px, ~46px
  ```
- Description: mono 11px muted, left border 2px acid green, max-width 380px
- CTAs: "EXPLORER LES PROJETS →" (primary) + "RASHLABS.DEV" (outline)
- Coordinates block (bottom-right):
  ```
  LAT  48.8566° N
  LNG  2.3522° E
  ─────────────
  PROJETS  ∞
  STATUS   ONLINE
  ```
- Status bar (bottom strip, 1px top border):
  `RASHOPS.LABS / PROD` · `STACK Vue 3 · Vite 8 · TW4` · `BUILD 2026` · `© RASHOPS`

### [PROJECTS — 02]
- Asymmetric masonry grid (NOT equal columns)
- 4 cards: Eventry · FinPulse AI · RashOps Labs · OpenClaw
- Card hover: 3D tilt + acid green border

### [STACK — 03]
- Brutalist mono list, NO icons
  ```
  FRONTEND   Vue 3 · TypeScript · Tailwind v4 · Vite
  BACKEND    FastAPI · PostgreSQL · MongoDB · Redis
  DATA/AI    Python · LangGraph · Qdrant · LlamaIndex
  INFRA      Docker · Terraform · Cloudflare · DigitalOcean
  TOOLS      n8n · Doppler · Datadog · Sentry
  ```

### [PORTFOLIO BRIDGE — 04]
- Asymmetric diagonal separator at top (CSS clip-path)
- Background: `#141420`
- Large display text: `L'AUTRE CÔTÉ DU MIROIR`
- Subtext: `Parcours académique · Expériences corporate · Data Science`
- Single CTA with pulsing glow animation → `rayhan-touboui.tech`

### [FOOTER]
- 1px top border, single line
- Left: `RASHOPS.LABS © 2026`
- Right: GITHUB · LINKEDIN · CONTACT (mono 9px)

---

## 6. DESIGN CONSTRAINTS (HARD RULES)

```
✅ ALWAYS                          ❌ NEVER
─────────────────────────────────  ──────────────────────────────────
border-radius: 0 everywhere        rounded-* Tailwind classes
1px solid borders                  box-shadow
acid green as ONLY accent          second accent color
JetBrains Mono for all labels      serif fonts
Chakra Petch for all display       system fonts for headlines
instant button state changes       CSS transitions on buttons
visible grid background            blank/clean backgrounds
0.88 line-height on large type     default 1.5 line-height on display
                                   glassmorphism / backdrop-blur
                                   gradient fills on cards
                                   icons as pure decoration
                                   pastel or muted accent colors
```

---

## 7. STITCH GENERATION REQUEST

**Task**: Generate a complete high-fidelity mockup of the `rashlabs.dev` landing page
described in this document, respecting ALL design constraints above.

**Deliver**:
1. Full-page desktop mockup (1440px wide reference)
2. Hero section close-up (with 3D element placeholder)
3. Project cards grid close-up

**Tone calibration**: The result should feel aggressively non-corporate.
If the output looks like it could be a startup SaaS landing page — it's wrong.
Push harder on the brutalist direction: break the grid intentionally,
use larger type than feels comfortable, let the acid green dominate.

**Reference aesthetic**: Brutalist web design × hacker terminal × experimental art direction.
NOT: Linear, Vercel, Stripe, or any polished design system.
