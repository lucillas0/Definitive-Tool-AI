#!/usr/bin/env node
// Valida frontmatter de skills/shark-design + lock: name=dir, description con triggers.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
let fail = 0;
const ok = (m) => console.log('OK  ' + m);
const bad = (m) => { console.error('FAIL ' + m); fail++; };

const skillFile = path.join(root, 'skills', 'shark-design', 'SKILL.md');
if (!fs.existsSync(skillFile)) { bad('falta skills/shark-design/SKILL.md'); process.exit(1); }
const t = fs.readFileSync(skillFile, 'utf8');
const fm = t.match(/^---\n([\s\S]*?)\n---/);
if (!fm) { bad('sin frontmatter --- ---'); process.exit(1); }
const get = (k) => (fm[1].match(new RegExp('^' + k + ':\\s*(.+)$', 'm')) || [])[1] || '';
const name = get('name').trim();
if (name !== 'shark-design') bad(`name debe ser 'shark-design' (es '${name}')`); else ok('name = shark-design');
const desc = get('description');
for (const s of ['BRIEF', 'DESIGN', 'AUDIT', 'BUILD', 'FIND-SKILLS', 'PITCH', 'HANDOFF', 'EVOLV']) {
  if (!desc.toUpperCase().includes(s)) bad(`description sin '${s}'`); else ok(`description menciona ${s}`);
}
if (/disable-model-invocation:\s*true/i.test(fm[1])) bad('no uses disable-model-invocation:true (bloquea auto-invocación)');
else ok('auto-invocación permitida');
for (const m of ['references/m0-brief.md','references/m1-design.md','references/m2-audit.md','references/m3-build.md','references/m4-find.md','references/m5-pitch.md','references/m6-handoff.md','references/m7-evolve.md']) {
  if (!t.includes(m)) bad(`falta ${m}`); else ok(m);
  if (!fs.existsSync(path.join(root, 'skills', 'shark-design', m))) bad(`no existe ${m}`);
}
// lock
try {
  const lock = JSON.parse(fs.readFileSync(path.join(root, 'skills.lock.json'), 'utf8'));
  if (!Array.isArray(lock.skills) || lock.skills.length !== 20) bad(`skills.lock.json debe tener 20 skills (tiene ${(lock.skills||[]).length})`);
  else ok('lock con 20 entradas');
} catch (e) { bad('skills.lock.json inválido: ' + e.message); }
// comandos
for (const c of ['commands/shark-brief.md','commands/shark-design.md','commands/shark-audit.md','commands/shark-audit-full.md','commands/shark-build.md','commands/shark-find.md','commands/shark-pitch.md','commands/shark-handoff.md','commands/shark-evolve.md','COMMANDS.md','knowledge/auditoria-integral.md','knowledge/shark-moments.md']) {
  if (!fs.existsSync(path.join(root, c))) bad('falta ' + c); else ok(c);
}
if (fail) { console.error(`\n${fail} fallo(s)`); process.exit(1); }
console.log('\nvalidate OK');
