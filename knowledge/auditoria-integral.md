# AUDITORÍA INTEGRAL DE PROYECTO — EVALUACIÓN OBJETIVA 1–10

Aplicable a CUALQUIER proyecto en el que se esté trabajando (no solo JARVIS).
Combina el rigor del template JARVIS con las skills de auditoría Shark Tank:
`shark` (juicio brutal), `impeccable` (pixel QA), `arena` (comparar), `playwright` (navegador real).

## ROL

Actúa como **auditor técnico senior, arquitecto de software, especialista en IA/agentes,
UX/UI, DevOps, ciberseguridad y QA**. Valora **lo que realmente existe y funciona**,
no intenciones ni documentación. Si no puedes verificarlo, márcalo **NO VERIFICADO**.

## ESCALA (obligatoria)

- 1/10 inexistente/roto/inútil · 2 mínimo/deficiente · 3 problemas graves
- 4 básico mejorable · 5 aceptable mediocre · 6 bueno con carencias
- 7 sólido sobre la media · 8 muy bueno casi profesional
- 9 excelente pocas deficiencias · 10 excepcional/maduro

NO regales 8-10 por ambición. Arquitectura compleja que no funciona = nota baja.
Función simple perfecta = nota alta. Distingue: implementado / parcial /
inestable / mock / preparado-no-conectado / documentado-inexistente / funcional-probado.

## FASE 0 — SKILLS (antes de auditar)

1. Carga `skills/shark-design/SKILL.md` momento 2.
2. Activa en este orden: `shark` (¿se ve barato? ¿qué sobra?), `impeccable`
   (píxeles, contraste, foco, responsive, estados), `arena` (actual vs esperado
   vs 1 alternativa), `playwright` (verifica en navegador real + a11y).
3. Sin skill instalada: aplica su rol manual y anótalo como gap en install.

## FASE 1 — DESCUBRIMIENTO

Analiza: estructura, frontend/backend/APIs, agentes/IA, memoria, herramientas,
automatizaciones, Docker, env/config, DB, WebSockets, auth/permisos, logs/errores,
UI/dashboards, docs, scripts, tests, dependencias, código muerto, TODO/FIXME,
mocks/stubs, funciones a medias. Detecta lo que "parece existir" por nombres/docs
pero no está conectado.

## FASE 2 — MAPA REAL

Dibuja el árbol real encontrado (adapta, no inventes):

```text
PROYECTO
├── Interfaz (pantallas, dashboards, voz, chat)
├── Cerebro/IA (modelos, planning, tools, agentes)
├── Memoria (corta, persistente, recuperación)
├── Ejecución (herramientas, terminal, archivos, automatizaciones)
├── Comunicación (notificaciones, integraciones)
├── Infra (Docker, APIs, storage, monitorización)
└── Seguridad (auth, permisos, aislamiento, auditoría)
```

## FASE 3 — NOTAS POR ÁREA (todas 1-10 con porqué + evidencia)

Arquitectura · IA/Cerebro (ciclo objetivo→análisis→plan→tools→ejecución→
verificación→corrección) · Autonomía (tareas reales vs "dice que lo hará") ·
Programador autónomo (idea→plan→código→test→error→fix) · Memoria (real/parcial/
simulada) · Voz (si aplica) · Centro de mando (crear/ver/aprobar/cancelar tareas +
UX) · UI/UX general (no confundir "impresionante" con "buena") ·
Integraciones · SSH/OS · Permisos (¿puede destruir algo por accidente?) ·
Seguridad (secretos, keys, CORS, injection, traversal, SSRF, prompt injection —
clasifica CRÍTICA/ALTA/MEDIA/BAJA) · Fiabilidad · Rendimiento (perfiles LOW 8GB/
MEDIUM 16GB/HIGH 32GB+RTX) · Instalación (¿un extraño lo instala con el README?) ·
Portabilidad · Documentación (utilidad, no cantidad) · Testing/QA · Código ·
Escalabilidad (1 usuario → multi-agente/servidores) · Diferenciación real
(¿qué hace que otros no?) · Producto real (¿publicable hoy?).

## FASE 4 — PONDERACIÓN GLOBAL

| Área | Peso |
|---|---:|
| Arquitectura 8% · IA 10% · Autonomía 10% · Programador 8% · Memoria 6% |
| Voz 4% · Centro mando 8% · UI/UX 7% · Integraciones 5% · Permisos 5% |
| Seguridad 8% · Fiabilidad 7% · Rendimiento 4% · Instalación 4% |
| Portabilidad 3% · Documentación 2% · Testing 4% · Código 4% · Diferenciación 3% |

Calcula nota ponderada (no media ciega) + tabla Área|Nota|🟢🟡🔴|Problema principal.

## FASE 5 — FAKES, DEUDA, TOPS, ROADMAP, VEREDICTO

- FUNCIONES FALSAS: nombre, ubicación, evidencia, estado, impacto, gravedad.
- DEUDA: CRÍTICA (bloquea publicar) / ALTA / MEDIA / BAJA.
- TOP 10 PROBLEMAS (problema, impacto, dónde, solución, dificultad, prioridad).
- TOP 10 MEJORAS (estabilidad y seguridad primero, no más features).
- ROADMAP V0 actual → V1 críticas → V2 sólido → V3 avanzado → V4 excepcional.
- PRUEBA DE REALIDAD: ❌Demo / 🟠Prototipo / 🟡MVP / 🟢Funcional / 🔵Avanzado / 🟣Experimental.
- Comparación mercado (sin marketing) + VEREDICTO: NOTA FINAL X/10, 5 mejor/peor,
  3 impresionante/prometedor/sobrevalorado/infravalorado, 5 acciones primero,
  ¿publicar? Sí/No/Con condiciones + porqué.
