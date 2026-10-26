# Ejemplo momento 2 — audit brutal

UI: landing con hero gris sobre gris, CTA sin foco visible, solo desktop.

| Fallo | Severidad | Fix |
|---|---|---|
| Contraste hero 2.1:1 | alta | Texto #111 sobre fondo claro, ratio ≥4.5:1 |
| Sin foco visible en CTA | alta | `focus-visible: 2px outline` (impeccable) |
| Solo desktop, rompe en 360px | alta | Grid 1 col + hero apilado (momento 1) |
| Sin estado error en form | media | Mensaje + `aria-describedby` (playwright a11y) |

Veredicto shark: se ve barato por falta de contraste y responsive. Tras fixes: re-auditar y `touch .shark-audited`.
