# Definitive-Tool-AI

> Antes Shark Tank Design Kit. El router interno `shark-design` y los comandos `/shark-*` mantienen su nombre para no romper instalaciones.

Plugin/kit único para **Claude Code, Opencode y Freebuff** con las **18 skills de tu PDF "Shark tank"**.
Instala las skills una vez y la IA las usa sola cada vez que diseñes o crees algo (router + instrucciones siempre-activas + hook recordatorio).

## Qué incluye

- `skills/shark-design/SKILL.md` — skill maestra router (una sola que la IA auto-invoca, delega en las 18).
- `hooks/hooks.json` + `scripts/remind-design.cjs` — hook `UserPromptSubmit` de Claude que recuerda usar el router en tareas visuales.
- `scripts/install-skills.sh` / `.ps1` — instala las 17 de GitHub con `npx skills add -g` + `find-skills` por curl (tal como viene en tu PDF).
- `opencode/shark-design-plugin.js` + `opencode.json.example` — plugin + `instructions` siempre-activos para Opencode.
- `AGENTS.md.example` — bloque para `AGENTS.md` (Freebuff/Opencode/proyecto) que obliga a usar el router al diseñar.
- `.claude-plugin/{plugin,marketplace}.json` — para distribuir como plugin de Claude Code.

## Las 18 skills (de tu PDF)

shark, mirofish, hallmark, hairline, agent-reach, arena, motion-design, find-skills,
thinking-orbs, ui-ux-pro-max, taste, awesome-claude-design, design-motion-principles,
impeccable, playwright, shadcn, ecc, xtool. Ver URLs en `skills/shark-design/SKILL.md`.

## Instalación — 1) las skills (una vez)

```bash
# Mac/Linux:
./scripts/install-skills.sh
# Windows PowerShell:
.\scripts\install-skills.ps1
# Verificar:
npx skills list
```

> Nota: `npx skills add` es el instalador del ecosistema abierto (ver skill `find-skills`).
> Si un repo falla, clónalo manual a `~/.claude/skills/<nombre>/` y renombra su `SKILL.md`.

## Instalación — 2) por agente

### Claude Code (plugin + hook)
```bash
claude plugin validate ./definitive-tool-IA
claude plugin marketplace add ./definitive-tool-IA
claude plugin install definitive-tool-ia@definitive-tool-ia-marketplace
```
El hook inyecta el recordatorio solo; la invocación la decide el modelo por el
`description` del router. Para forzar: `/definitive-tool-ia:shark-design`.

### Opencode
```bash
mkdir -p .opencode/skills .opencode/plugins
cp -r definitive-tool-IA/skills/shark-design .opencode/skills/
cp definitive-tool-IA/opencode/shark-design-plugin.js .opencode/plugins/
```
Y en tu `opencode.json` añade (ver `opencode.json.example`):
```json
{ "plugin": ["./.opencode/plugins/shark-design-plugin.js"],
  "instructions": ["./.opencode/skills/shark-design/SKILL.md"] }
```

### Freebuff / Codebuff
```bash
mkdir -p .agents/skills
cp -r definitive-tool-IA/skills/shark-design .agents/skills/
```
Pega el contenido de `AGENTS.md.example` en tu `AGENTS.md` del proyecto
(o `~/.AGENTS.md` global). Las skills se auto-cargan por su `description`;
para forzar: `/skill:shark-design`. Si no aparece, reinicia Freebuff.
Docs: https://www.codebuff.com/docs/tips/skills

## Nivel top: qué se añadió en 1.1.0

- `skills.lock.json` + `scripts/doctor.sh/ps1`: dice qué de las 18 existe de verdad (playwright/shadcn son repos generales, no skills).
- Comandos `/definitive-tool-brief /definitive-tool-audit /definitive-tool-pitch /definitive-tool-handoff` (`commands/`) + subagente `visual-qa` (`agents/`).
- Quality gate `scripts/qa-gate.cjs` (hook `PreToolUse` sobre Bash): bloquea `git commit` sin `.shark-audited` vigente (24h). `/shark-audit` lo genera.
- Observabilidad `scripts/log-usage.cjs` → `.shark-log.jsonl` (momento + skill por tarea).
- `package.json` (`@lucas/definitive-tool-ia`), `CHANGELOG.md`, CI `.github/workflows/validate.yml`, `knowledge/shark-moments.md` (Freebuff siempre-activo), `examples/` (brief/audit/pitch).

## Uso diario (8 momentos)

- 0 Brief: "necesito una app para X..." -> thinking-orbs + agent-reach + mirofish (define éxito antes de dibujar).
- 1 Diseño: "diseña una landing..." -> taste + ui-ux-pro-max + motion-design.
- 2 Auditoría: "audita esta UI / se ve barato..." -> shark + impeccable + arena + playwright con fallos + fixes.
- 3 Código: "crea este componente con shadcn..." -> shadcn/ecc/xtool + verificación Playwright.
- 4 Búsqueda: si falta skill -> `npx skills find "<tema del momento>"`, verifica installs/fuente y propone `npx skills add -g -y`.
- 5 Pitch: "cuál variante gana..." -> shark + arena + hallmark con veredicto.
- 6 Handoff: "pásalo a sistema/tokens..." -> shadcn + ecc + ui-ux-pro-max + deuda pendiente.
- 7 Evolución: "unifica/migra esta UI vieja..." -> impeccable + arena + playwright.

La IA cierra siempre con: momento detectado (0-7), skill usada y skill a instalar.
