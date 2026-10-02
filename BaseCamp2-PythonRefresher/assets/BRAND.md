# GenAI Coaching × AI Accelerator Hub — Enterprise Brand System

White / Black / Gold Veranda — powered by AI Accelerator Hub

## Files Delivered (enterprise deployable)

| File | Use | Background |
|---|---|---|
| `genai-icon.svg` | **Primary app icon** — 120×120, rx26, black/white/gold neural-grid | Black #0A0A0A |
| `genai-coaching-emblem.svg` | Circular brain-labyrinth emblem — favicon, avatar, social, 200×200 | Black #0A0A0A |
| `genai-coaching-logo.svg` | **Master horizontal lockup** — emblem + GEN AI / COACHING + pill | Black #0A0A0A (transparent option) |
| `genai-coaching-logo-light.svg` | Light-background variant for docs/print | White #FFFFFF |
| `ai-accelerator-hub-logo.svg` | AI Accelerator Hub lockup (light bg: black text, gold hub) | White |
| `ai-accelerator-hub-logo-dark.svg` | AI Accelerator Hub lockup (dark bg: white text, gold hub) | Black #0A0A0A |

All SVGs pure vector, no raster, no external fonts — 16px → 512px+, print-ready.

## Color System — Black / White / Gold Veranda

Enterprise luxury, no purple/indigo, no Outskill teal/green.

- **Ink / Primary:** `#0A0A0A` — sidebar, app icon base, light-mode text
- **Gold / Accent (Veranda):** `#C9A86A` (hover `#B8941F`, soft `#FFF8E6`) — active nodes, sparkle, progress, CTAs, top-nav border
- **Paper:** `#FFFFFF` — nodes, maze strokes, page background
- **Crow / Canvas:** `#0A0A0A` — brand canvas (98% black, softer than pure #000)
- **Border:** `#E8E0C8` — gold-tinted neutral for cards, dividers
- **Dim Text:** `#6B6B6B` (sidebar dim `#9A9A9A`)

## Icon Anatomy (genai-icon.svg)

Backward-compatible viewBox `0 0 120 120`:

1. **Base:** `rx26` rect `#0A0A0A`
2. **Labyrinth ring:** double track (42r outer, 28r inner) with 6 gaps — circular maze from GenAI Coaching PNG, now abstracted to square
3. **Neural mesh:** 3×3 grid retains 9 positions. Connectors: gold `#C9A86A` 1.35px + white diagonals 32% — distributed cohort, not static grid
4. **Nodes:** 4× gold active (`#C9A86A` with white inner + ink dot), 5× white idle — preserves original count, now gold for veranda luxury
5. **Generative sparkle:** top-right 4-point star `M0 -14 → 12.2,0 → 0,14 → -12.2,0` in `#C9A86A` with 22% glow + white core

Single-color fallback: set all `fill`/`stroke` to `currentColor` — holds at 1-bit.

## AI Accelerator Hub Logo

Hub icon: central gold `#C9A86A` node with 3 spokes to outer nodes (black/white + gold ring). Wordmark `AI ACCELERATOR` (Fraunces 700) + `HUB` (400, tracking 3.2, gold) + `AI ACCELERATOR` (6.8px, 500, #9A9A9A). Light variant (black text) for white footer, dark variant (white text) for black sidebar.

## Navigation — Segregated Top & Bottom

- **Top nav `.genai-nav-top`:** black bar, gold border, inside `GENAI Journey` label + Prev (ghost #1A1A1A / #E8E0C8) + Next (gold #C9A86A) — appears directly under page-header / slide-toolbar, compact pill style.
- **Bottom nav `.genai-nav-bottom`:** white card, gold-tinted border #E8E0C8, shadow, copy `Continue your elite future` + `Next up: <Title>` + Prev (white/gold border) + Continue (gold) — appears before `</main>`, large card style.
- Links are relative (`../` aware) and chain the full curriculum: 1_Python → 2_VS_Code → ... → 9_llm_settings → Virtual Env → Git → Python Refresher → FastAPI → UI → Blueprint → Calculator → OpenCode → Full Stack. Last page shows Completed.

## Usage

- **App / favicon:** `genai-icon.svg` or `genai-coaching-emblem.svg` (circular crop)
- **Header (dark sidebar):** `genai-coaching-emblem.svg` 28px + `GEN AI COACHING` stacked, sub `Unlock Your Elite Future · Powered by AI Accelerator Hub`
- **Footer (white):** `genai-coaching-logo.svg` 28px — `GEN AI COACHING` | `ai-accelerator-hub-logo.svg` 22px + tagline `GenAI Learning · Powered by AI Accelerator Hub — AI Accelerator Hub`
- **Sizing:** emblem min 20px, lockup min 280px, icon min 24px. Clear space = radius/2.
- To place on transparent dark UI, delete `<rect fill="#0A0A0A">` in logo files.

## Quality Checks

- No Outskill / Growth School strings, no #002726 / #33C375, no purple gradients, no bg-clip-text, no aurora
- Valid SVG 1.1, flat enterprise, 1px borders, 10px radius
- Tested 24/32/48/120/256px: crisp, no collapse
- Print: 100% K for ink, Pantone 871 C approx for #C9A86A
