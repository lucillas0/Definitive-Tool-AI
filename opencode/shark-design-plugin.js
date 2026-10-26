// Opencode plugin: usa shark-design en los 8 momentos.
// Instalación: copia a .opencode/plugins/shark-design.js
// Docs: https://opencode.ai/docs/plugins/
export const SharkDesignPlugin = async () => ({
  // Hook experimental: suma guía al system prompt, no lo reemplaza.
  "experimental.chat.system.transform": async (_input, output) => {
    output.system.push([
      "Shark Tank router (.opencode/skills/shark-design/SKILL.md):",
      "(0) BRIEF -> thinking-orbs, agent-reach, mirofish;",
      "(1) DESIGN -> taste, ui-ux-pro-max, motion-design, hallmark, hairline;",
      "(2) AUDIT -> shark, impeccable, arena, playwright;",
      "(3) BUILD UI code -> shadcn, ecc, xtool, playwright;",
      "(4) missing skill -> find-skills per moment;",
      "(5) PITCH -> shark, arena, hallmark;",
      "(6) HANDOFF -> shadcn, ecc, ui-ux-pro-max, xtool;",
      "(7) EVOLVE -> impeccable, arena, playwright.",
    ].join(" "));
  },
});
