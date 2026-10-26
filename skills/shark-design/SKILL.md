---
name: shark-design
description: Use whenever (0) BRIEFING a vague idea, (1) DESIGNING UI, (2) AUDITING UI/review/QA, (3) BUILDING UI code, (4) MISSING a skill (find-skills), (5) PITCHING variants, (6) HANDOFF to design system, (7) EVOLVING legacy UI. Routes to Shark Tank skills + anime/three libs.
license: MIT
compatibility: claude-code, opencode, freebuff
---

# Shark Design Router (slim — bajo consumo)

> Detecta el momento (0-7), lee SOLO su archivo `references/mX-*.md` y la
> skill concreta que toque. No leas los 8 ni todas las skills.

- 0 Brief vago → `references/m0-brief.md`
- 1 Diseñar/prototipar/animar → `references/m1-design.md` (1 diseño + 1 optimizadora: thinking-orbs/agent-reach/ecc/arena)
- 2 Auditar/revisar/QA → `references/m2-audit.md` (**shark** = juicio estético brutal tipo *Shark Tank* - ¿se ve barato/qué sobra? → **impeccable** (píxeles/contrast/focus/responsive/estados) → **arena** (comparar variantes A/B) → **playwright** (navegador real/a11y); crítico: `/definitive-tool-audit-full`)
- 3 Crear componentes/páginas → `references/m3-build.md` (shadcn/ecc/anime/three/playwright)
- 4 Falta skill → `references/m4-find.md` (`npx skills find "<tema>"`, verifica installs/fuente)
- 5 Presentar/elegir → `references/m5-pitch.md`
- 6 Sistema/tokens → `references/m6-handoff.md`
- 7 UI vieja/migrar → `references/m7-evolve.md`

Reglas: sin skill instalada aplica su rol manual y anota el gap + install
(`scripts/install-skills.sh`). Cierre: momento, skill diseño + optimizadora, a instalar.
Qué es skill/plugin/lib: `skills.lock.json`.
