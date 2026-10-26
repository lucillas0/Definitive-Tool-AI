#!/usr/bin/env bash
# Doctor: verifica qué skills del lock están realmente instaladas.
# Uso: ./scripts/doctor.sh  (lee skills.lock.json con node)
set -e
cd "$(dirname "$0")/.."
echo "== Shark Tank doctor =="
node scripts/validate-skills.cjs || true
echo ""
echo "-- skills instaladas (npx skills list) --"
npx skills list 2>/dev/null || echo "(no se pudo correr 'npx skills list')"
echo ""
echo "-- dirs locales --"
for d in "$HOME/.claude/skills" "$HOME/.config/opencode/skills" ".opencode/skills" ".agents/skills" ".claude/skills"; do
  if [ -d "$d" ]; then echo "DIR $d:"; ls "$d" | head -30; else echo "DIR $d: (no existe)"; fi
done
echo ""
echo "Tip: lo no instalado se instala con ./scripts/install-skills.sh"
