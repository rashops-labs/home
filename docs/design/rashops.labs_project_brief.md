# Project Brief: RASHOPS.LABS — Experimental Tech Lab

## 1. Vision Statement
RASHOPS.LABS is a personal experimental tech lab designed to showcase high-fidelity engineering projects through a lens of **Acid-Brutalist** aesthetics. The design rejects the "clean SaaS" and "glassmorphism" trends in favor of a raw, aggressive, and intentionally technical interface that reflects a "senior engineer" persona.

---

## 2. Visual Identity & Design System

### Core Philosophy
- **Friction over Polish**: Sharp edges (0px radius), visible grid lines, and high-contrast typography.
- **Terminal Aesthetic**: Heavy use of monospaced fonts and status indicators.
- **Motion with Purpose**: Interactive 3D wireframes and pulsing status indicators; no "soft" transitions.

### Color Palette (Strict)
- **Background**: `#060609` (Near black, purple tint)
- **Surface**: `#0D0D16` (Elevated dark surface)
- **Accent (Hero)**: `#AAFF00` (Electric Acid Green — Neon/Aggressive)
- **Foreground**: `#EBEBDF` (Warm off-white)
- **Muted**: `#565666` (Functional labels/meta)
- **Danger**: `#FF2D2D` (Alerts/Active states)
- **Borders**: `#1A1A28` (Grid lines and containers)

### Typography
- **Headlines (Display)**: *Chakra Petch* — Bold, angular, tech-military feel.
- **UI/Labels (Mono)**: *JetBrains Mono* — Terminal-style readability.

---

## 3. Screen Requirements

### Landing Page (Single Page Architecture)
1.  **Nav Bar**: Fully transparent, featuring a blinking cursor logo and version tag (`v0.1.0`).
2.  **Hero Section**: 
    - Full-height (100vh).
    - Interactive Three.js Torus Knot wireframe with mouse parallax.
    - Cascading headlines: *CONSTRUIRE / CASSER / RECOMMENCER*.
    - Real-time data blocks (Coordinates/Load stats).
3.  **Projects Grid**: 
    - Asymmetric masonry layout.
    - 3D-tilt hover interactions.
    - Status badges (EN COURS / TERMINÉ).
4.  **Stack Section**: 
    - Categorized tech listings (Frontend, Backend, Data/AI, Infra).
5.  **Portfolio Bridge**: 
    - High-impact diagonal transition.
    - Pulse-animated CTA leading to the main portfolio.
6.  **Footer**: 
    - Minimal system status and contact links.

---

## 4. Technical Specifications
- **Framework**: Vue 3 + Vite
- **Styling**: Tailwind CSS v4 (Alpha/Experimental)
- **Graphics**: Three.js (WebGL) for procedural 3D elements.
- **Hosting/Infrastructure**: Docker-first deployment strategy.

---

## 5. Interaction Model
- **Zero-Latency**: Buttons have no CSS transitions; state changes are instant.
- **Scroll Tensions**: Heavy borders and visible grid lines create a sense of structure.
- **Live Data**: UI elements simulate or display real-time system metrics (Build date, Latency, Status).