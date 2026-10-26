#!/usr/bin/env node
// Quality gate: bloquea git commit si hay UI sin auditar (momento 2).
// Claude hooks: PreToolUse sobre Bash(git commit). Opencode: revísalo manual.
// Marca auditada con: .shark-audited (contiene fecha + alcance). Lo crea /shark-audit.
const fs = require('fs');
const path = require('path');
const proj = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const marker = path.join(proj, '.shark-audited');
let input = '';
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
  let tool = '';
  try { tool = JSON.parse(input || '{}').tool_input?.command || ''; } catch {}
  if (!/git\s+commit/.test(tool)) process.exit(0); // solo gatea commits
  if (fs.existsSync(marker)) {
    const age = Date.now() - fs.statSync(marker).mtimeMs;
    if (age < 1000 * 60 * 60 * 24) process.exit(0); // audit válido 24h
  }
  console.log(JSON.stringify({
    decision: 'block',
    reason: 'Definitive Tool: hay cambios UI sin auditoría vigente. Corre /definitive-tool-audit (momento 2) y reintenta. El audit crea .shark-audited válido 24h. Para saltar en casos no-UI, borra cambios UI del commit.'
  }));
});
