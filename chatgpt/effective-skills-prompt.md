# Effective Tool — Skills / Shark Design Router
## Cómo usar estas skills en ChatGPT (o cualquier chatbot de IA)

> Este archivo es una **guía ligera** para que, en ChatGPT, el chat o cualquier
> agente de IA pueda usar las skills `shark-design` sin sobredimensionar
> el contexto. No requiere plugins, solo instrucciones claras al contexto.

---

## Qué es este kit

**Definitive Tool IA** (antes Shark Tank Design Kit) es un router de **8 momentos**
para IA generativa:
- **0 Brief** — pedido vago → define usuario, tarea, pantallas y éxito antes de diseñar
- **1 Diseño** — diseñar/prototipar/animar UI con 1 skill de diseño + 1 skill optimizadora/grupo
- **2 Auditoría** — auditar/revisar/QA/comparar (shark→impeccable→arena→playwright)
- **3 Código** — crear/implementar componentes o páginas (shadcn, ecc, xtool, playwright)
- **4 Búsqueda** — si ninguna skill instalada cubre el pedido → usa find-skills
- **5 Pitch** — presentar/elegir variante con veredicto y por qué gana
- **6 Handoff** — pasar a sistema/tokens, lista reutilizado vs nuevo + deuda
- **7 Evolución** — UI vieja/unificar/migrar con regresión visual

---

## Cómo usar esto en ChatGPT

**Opción A — Copiar el bloque de prompt al "Custom Instructions" o al inicio del chat**

Pega este texto en la primera conversación o en las instrucciones personalizadas de tu perfil de ChatGPT:

```
## Shark Tank / Definitive Tool IA — 8 momentos (siempre activo)

0. BRIEF: pedido vago → momento 0 (thinking-orbs, agent-reach, mirofish).
   Define usuario, tarea, pantallas y éxito antes de diseñar.
1. DISEÑO: diseñar/prototipar/animar → momento 1 (taste, ui-ux-pro-max,
   awesome-claude-design, thinking-orbs, mirofish, hallmark, hairline,
   motion-design, design-motion-principles, agent-reach).
   Regla: COMBINACIÓN OBLIGATORIA — 1 skill de diseño + 1 optimizadora/grupo
   (thinking-orbs razona, agent-reach alcance, ecc reparte subtareas, arena compara).
2. AUDITORÍA: auditar/revisar/QA/comparar → momento 2 (shark, impeccable,
   arena, playwright) con fallos + fixes.
3. CÓDIGO: crear/implementar componentes o páginas → momento 3
   (shadcn, ecc, xtool, agent-reach, playwright) reutilizando el sistema.
4. BÚSQUEDA: si ninguna skill cubre el pedido → momento 4, usa find-skills
   (`npx skills find <tema del momento>`) antes de improvisar, verifica
   installs/fuente y propone `npx skills add -g -y`.
5. PITCH: presentar/elegir variante → momento 5 (shark, arena, hallmark)
   con veredicto y por qué gana.
6. HANDOFF: pasar a sistema/tokens → momento 6 (shadcn, ecc, ui-ux-pro-max,
   xtool), lista reutilizado vs nuevo + deuda.
7. EVOLUCIÓN: UI vieja/unificar/migrar → momento 7 (impeccable, arena,
   playwright) + momento 4 si surge algo nuevo.

Sigue `skills/shark-design/SKILL.md`. Si la skill concreta no está instalada,
aplica el flujo base del momento y dime cuál instalar con
`scripts/install-skills.sh`. Cierra siempre con: momento detectado,
skill usada, skill a instalar.
```

**Opción B — Subir el archivo SKILL.md del router (si ChatGPT lo soporta)**

En chats con capacidad de "attachments" o "knowledge files" (como "Project" de ChatGPT),
puedes adjuntar:
- `skills/shark-design/SKILL.md` (el router slim, ~1-2KB)

El router detecta el momento y carga solo el archivo necesario. No necesita cargar
los 8 ni todos los skills.

**Opción C — Comandos directos (modo manual)**

Si no hay sistemas automáticos, usa estos prompts manuales:

- `/definitive-tool-brief` → "Estructura este pedido vago en brief: usuario, tarea, 3-5 pantallas, éxito y qué NO entra"
- `/definitive-tool-design` → "Diseña UI combinando 1 skill de diseño + 1 optimizadora"
- `/definitive-tool-audit` → "Audita esta UI como jurado brutal con fallos y fixes"
- `/definitive-tool-build` → "Implementa la UI en código reutilizando el sistema"
- `/definitive-tool-find` → "Busca la skill que falta para este momento con find-skills"
- `/definitive-tool-pitch` → "Compara variantes y da veredicto de cuál gana"
- `/definitive-tool-handoff` → "Pasa el prototipo a sistema de diseño con tokens y deuda"
- `/definitive-tool-evolve` → "Unifica o migra UI vieja con regresión visual"

---

## Notas importantes

- Este kit **no instala skills automáticamente** en ChatGPT. Es manual o mediante
  `npx skills add` en tu entorno local.
- Las skills que no tienen SKILL.md (como `playwright`, `shadcn`, `ecc`, `anime`, `three`)
  son referencias de documentación, no skills instalables.
- Para modo completo de auditoría (1-10 con veredicto final), usa la plantilla
  `knowledge/auditoria-integral.md` con el comando `/definitive-tool-audit-full`.
- Más información: https://github.com/lucillas0/Definitive-Tool-AI

---

## Casos de uso típicos

**Ejemplo Brief (momento 0)**
```
User: "Necesito una landing para una app de fitness con Sharks"
→ IA detecta momento 0 → aplica brief con thinking-orbs + agent-reach + mirofish
→ Define: usuario (personas que buscan entreno motivado), tarea (conoce la app, ve resultados, se registra), 3-5 pantallas (hero, testimonios, features, pricing, CTA), éxito (registro o demo), qué NO entra (login completo).
```

**Ejemplo Diseño (momento 1)**
```
User: "Diseña la hero de la landing con estilo premium y motion"
→ IA detecta momento 1 → taste (dirección) + thinking-orbs (razona) + motion-design (animación) + hallmark (pulido)
→ Propone: jerarquía, espaciado, tipografía, responsive, estados, proposal de motion sutil.
```

**Ejemplo Auditoría (momento 2)**
```
User: "Audita mi UI, se ve barato"
→ IA detecta momento 2 → shark (juicio) + impeccable (píxeles, contraste, focus, responsive) + arena (compara A/B) + playwright (si disponible)
→ Devuelve: tabla fallback | severidad | fix concreto.
```

---

## Skill references para ChatGPT (si sube archivos)

Si subes archivos individuales, estos son los que más impacto tienen:

| Archivo | Tamaño aprox | Qué aporta |
|---|---|---|
| `skills/shark-design/SKILL.md` | ~1-2KB | Router slim, detecta momento, lee solo necesario |
| `commands/shark-audit-full.md` | ~0.5KB | Auditoría 1-10 completa con plantilla veredicto |
| `knowledge/auditoria-integral.md` | ~1.5KB | Plantilla de auditoría integral |
| `knowledge/shark-moments.md` | ~0.4KB | Resumen de los 8 momentos |

El router `SKILL.md` carga solo uno de los `references/mX-*.md` según el momento detectado.
No necesitas cargar todos los 8 juntos.
