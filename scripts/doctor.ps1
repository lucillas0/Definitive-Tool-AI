# Doctor Windows: verifica skills instaladas.
# Uso: .\scripts\doctor.ps1
Write-Host "== Shark Tank doctor =="
node scripts/validate-skills.cjs
Write-Host ""
Write-Host "-- skills instaladas --"
npx skills list
Write-Host ""
Write-Host "-- dirs locales --"
foreach ($d in @("$HOME\.claude\skills", "$HOME\.config\opencode\skills", ".opencode\skills", ".agents\skills", ".claude\skills")) {
  if (Test-Path $d) { Write-Host "DIR ${d}:"; Get-ChildItem $d | Select-Object -First 30 Name } else { Write-Host "DIR ${d}: (no existe)" }
}
Write-Host "Tip: instala con .\scripts\install-skills.ps1"
