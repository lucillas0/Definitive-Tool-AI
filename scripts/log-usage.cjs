#!/usr/bin/env node
// Log mínimo: qué momento/skill se usó. La IA lo llama al cerrar cada tarea.
// Uso: node scripts/log-usage.js <momento 0-7> <skill> ["nota"]
// Guarda en .shark-log.jsonl del proyecto (no versionar).
const fs = require('fs');
const path = require('path');
const [moment, skill, ...rest] = process.argv.slice(2);
if (!moment || !skill) { console.error('Uso: log-usage.js <momento> <skill> [nota]'); process.exit(1); }
const proj = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const line = JSON.stringify({ ts: new Date().toISOString(), moment, skill, note: rest.join(' ').slice(0, 200) }) + '\n';
fs.appendFileSync(path.join(proj, '.shark-log.jsonl'), line);
console.log('logged', moment, skill);
