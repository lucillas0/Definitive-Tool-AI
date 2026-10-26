#!/usr/bin/env bash
# Instala lo VERIFICADO funcional (ver skills.lock.json v1.2.0).
# 8 skills vía npx + find-skills vía curl. Los 3 plugins van por marketplace.
# Los 7 'docs-only' NO se instalan (no tienen SKILL.md).
set -e
echo "== 1/3 skills reales (8) =="
for r in \
  alexyc9381/shark-skill \
  nutlope/hallmark \
  lucasmarkes/hairline \
  Jakeschincariol/arena-skill \
  lottiefiles/motion-design-skill \
  leonxlnx/taste-skill \
  kylezantos/design-motion-principles \
; do echo ">> npx skills add $r -g -y"; npx skills add "$r" -g -y; done

echo "== 2/3 find-skills (curl del PDF) =="
mkdir -p ~/.claude/skills/find-skills
curl -o ~/.claude/skills/find-skills/SKILL.md https://raw.githubusercontent.com/vercel-labs/skills/main/skills/find-skills/SKILL.md || true

echo "== 3/3 plugins (instalar como PLUGIN, no skills add) =="
echo " - ui-ux-pro-max: nextlevelbuilder/ui-ux-pro-max-skill (.claude-plugin/marketplace.json)"
echo " - impeccable:    pbakaus/impeccable (1 skill + 24 comandos /impeccable)"
echo " - ecc:           affaan-m/ecc (mega-plugin 71 agents/311 skills)"
echo "Claude: claude plugin marketplace add <repo> + install. Opencode/Freebuff: clona el repo y apunta a su SKILL.md."
echo ""
echo "== NO instalables (docs-only, ver lock) =="
echo " MiroFish(app) agent-reach(python) thinking-orbs(react lib) awesome-claude-design(lista) playwright/shadcn/Xtool(repos generales)"
echo "== Librerías npm (no skills, instala en tu proyecto si las necesitas) =="
echo " npm i animejs (https://github.com/juliangarnier/anime) · npm i three (https://github.com/mrdoob/three.js)"
echo ""
echo "cat ../COMMANDS.md 2>/dev/null || cat COMMANDS.md 2>/dev/null || true
echo ""
echo "Escribe / + nombre. Ej: /definitive-tool-brief /definitive-tool-design /definitive-tool-audit /definitive-tool-audit-full /definitive-tool-build /definitive-tool-find /definitive-tool-pitch /definitive-tool-handoff /definitive-tool-evolve"
Verifica con: ./scripts/doctor.sh && npx skills list"
