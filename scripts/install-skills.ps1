# Instala lo VERIFICADO funcional (skills.lock.json v1.2.0).
$ErrorActionPreference = "Stop"
$skills = @(
  "alexyc9381/shark-skill",
  "nutlope/hallmark",
  "lucasmarkes/hairline",
  "Jakeschincariol/arena-skill",
  "lottiefiles/motion-design-skill",
  "leonxlnx/taste-skill",
  "kylezantos/design-motion-principles"
)
foreach ($r in $skills) { Write-Host ">> npx skills add $r"; npx skills add $r -g -y }
$dest = "$HOME\.claude\skills\find-skills"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/vercel-labs/skills/main/skills/find-skills/SKILL.md" -OutFile "$dest\SKILL.md"
Write-Host "== Plugins (instalar como PLUGIN) =="
Write-Host " ui-ux-pro-max: nextlevelbuilder/ui-ux-pro-max-skill"
Write-Host " impeccable: pbakaus/impeccable"
Write-Host " ecc: affaan-m/ecc"
Write-Host "== NO instalables (docs-only): MiroFish, agent-reach, thinking-orbs, awesome-claude-design, playwright, shadcn, xtool =="
Write-Host "== Librerias npm: npm i animejs (juliangarnier/anime) - npm i three (mrdoob/three.js) =="
Get-Content "$PSScriptRoot\..\COMMANDS.md" -ErrorAction SilentlyContinue
Write-Host ""
Write-Host "Escribe / + nombre. Ej: /definitive-tool-brief /definitive-tool-design /definitive-tool-audit /definitive-tool-audit-full /definitive-tool-build /definitive-tool-find /definitive-tool-pitch /definitive-tool-handoff /definitive-tool-evolve"
Write-Host "Listo. Verifica con: npx skills list"
