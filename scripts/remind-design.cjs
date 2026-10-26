#!/usr/bin/env node
// Recuerda usar shark-design en los 8 momentos. Solo inyecta contexto.
const msg = "Definitive Tool router (skills/shark-design/SKILL.md): (0) vague BRIEF -> thinking-orbs, agent-reach, mirofish; (1) DESIGN -> taste, ui-ux-pro-max, motion-design, hallmark, hairline; (2) AUDIT/review/QA/benchmark -> shark, impeccable, arena, playwright; (3) BUILD UI code -> shadcn, ecc, xtool, playwright; (4) missing skill -> find-skills (npx skills find <moment topic>); (5) PITCH/pick variant -> shark, arena, hallmark; (6) HANDOFF/design-system -> shadcn, ecc, ui-ux-pro-max, xtool; (7) EVOLVE/legacy/migrate -> impeccable, arena, playwright. Use: /definitive-tool-brief /definitive-tool-design /definitive-tool-audit /definitive-tool-audit-full /definitive-tool-build /definitive-tool-find /definitive-tool-pitch /definitive-tool-handoff /definitive-tool-evolve. Ignore for non-design tasks.";
process.stdout.write(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: "UserPromptSubmit",
    additionalContext: msg
  }
}));
