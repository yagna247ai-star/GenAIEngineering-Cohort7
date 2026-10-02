# AI Accelerator Hub — Enterprise AI Learning Portal

Black & Gold rebrand of the AI Accelerator Hub Generative AI Learning Portal, rebuilt as a production-grade Angular 20 application.

## Brand
- **Name:** AI Accelerator Hub
- **Theme:** Black (#0A0A0B) + Gold (#D4AF37) — enterprise, editorial, high-contrast
- **Tagline:** Your AI Learning OS — Learn deeply. Build bravely.

## Parity — Every AI Accelerator Hub section replicated
1. **Sidebar + Topbar** — Fixed nav (Your Journey / Library / Support), progress, search ⌘K, guardrail badge
2. **Hero** — "A clear AI roadmap, built around you" with personalized CTA + 10–15 min onboarding notes
3. **Journey Preview** — 01 Discover / 02 Focus / 03 Build + stats (105 / 5 / 6 / 5)
4. **Complete Resource Library** — 5 cards: Personalized Journey, Learning Topics, Guided Workbooks, Practice Lab, Five-Level Roadmap
5. **Session Deep Dive** — `#session-1-foundations-of-generative-ai-and-the-ai-generalist-toolkit-3-prompt-engineering-versus-context-engineering` as a first-class anchored section (Generalist lens, Prompt vs Context, Guardrails + Try-it prompt)
6. **Built-in Support** — Beginner Glossary + I'm Stuck
7. **Use the Loop** — Learn → Practice → Build → Reflect
8. **Five-Level Roadmap** — Levels 01–05 with tags and enterprise guardrail note
9. **Guided Workbooks** — 5 workbooks
10. **Practice Lab** — 6 portfolio projects with progress, eval language, and VCA deploy challenge

Content is preserved; only branding, color, and copy polish have been elevated for enterprise readability.

## Stack
- Angular 20 (standalone, routing, `withInMemoryScrolling`)
- HTML + CSS (no Tailwind at runtime — handcrafted design tokens)
- TypeScript 5.8

## Local Dev
```bash
cd ai-accelerator-hub
npm install
npm start
# -> http://localhost:4200
```

## Production Build (VCA-ready)
```bash
npm run build
# output: dist/ai-accelerator-hub/browser
```

Serve `dist/.../browser` as static files on any static host. `index.html` has `<base href="/">`; for sub-path hosting set `ng build --base-href /your-path/`.

## VCA / Docker Deploy
```bash
docker build -t ai-accelerator-hub:1.0 .
docker run -p 8080:80 ai-accelerator-hub:1.0
# health: http://localhost:8080/health
```
`nginx.conf` handles SPA fallback (`try_files ... /index.html`), gzip, security headers, and long-term asset caching.

## Enterprise Guardrails
- Guardrail copy is explicit in roadmap, session, and lab
- Security headers in nginx
- No external data dependency — fully static, auditable
- `health` endpoint for VCA load-balancer checks
