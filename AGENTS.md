# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Desarrollo de una aplicación React para gestión de citas médicas**.

| | |
|---|---|
| Tema | Agenda de citas médicas |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | patrón de componentes contenedor/presentacional con hooks personalizados y separación de responsabilidades |
| Tiempo estimado | 20 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 18.3.1
- react-dom 18.3.1
- vitest 1.6.1
- zod 3.25.76
- @types/react 18.3.31
- @types/react-dom 18.3.7
- @vitejs/plugin-react 4.7.0
- typescript 5.7.3
- vite 5.4.21

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Implementación del calendario de citas**: Componente de calendario funcional que permite la reserva de citas.
- **Fase 2 — Implementación de la reprogramación y cancelación de citas**: Componentes adicionales que permiten reprogramar y cancelar citas, con validaciones apropiadas.
- **Fase 3 — Implementación de notificaciones**: Sistema de notificaciones que envía confirmaciones y recordatorios a los pacientes.
- **Fase 4 — Optimización y mejoras**: Implementación de optimizaciones de rendimiento y mejoras UX en las piezas existentes

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/features/calendar/Calendar.tsx` — La pieza p1 (Renderizado condicional de slots disponibles/ocupados, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/hooks/useAppointment.ts` — La pieza p2 (Gestión de estado asíncrono para slots disponibles, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/schemas/appointmentSchema.ts` — La pieza p3 (Validación de datos de formulario con Zod, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/appointments/AppointmentList.tsx` — La pieza p4 (Renderizado de lista con acciones condicionales, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/hooks/useAppointmentActions.ts` — La pieza p5 (Gestión de transiciones de estado para citas, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/hooks/useNotifications.ts` — La pieza p6 (Gestión de envío de notificaciones con reintentos, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/infrastructure/adapters/AppointmentActionAdapter.ts` — absorbida: fuga de la pieza p5
- [ ] `src/infrastructure/adapters/AppointmentRepositoryAdapter.ts` — absorbida: fuga de la pieza p5

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Implementación del calendario de citas | Renderizado condicional de slots disponibles/ocupados | `src/features/calendar/Calendar.tsx:Calendar` | El calendario muestra los slots disponibles para citas médicas; El usuario puede seleccionar un slot disponible para reservar; El formulario de reserva valida que el horario seleccionado esté disponible y que los datos del paciente sean válidos; La reserva falla con mensaje claro si el slot ya está ocupado | — | — |
| f1 — Implementación del calendario de citas | Gestión de estado asíncrono para slots disponibles | `src/core/hooks/useAppointment.ts:useAppointment` | El calendario muestra los slots disponibles para citas médicas; El usuario puede seleccionar un slot disponible para reservar; El formulario de reserva valida que el horario seleccionado esté disponible y que los datos del paciente sean válidos; La reserva falla con mensaje claro si el slot ya está ocupado | — | — |
| f1 — Implementación del calendario de citas | Validación de datos de formulario con Zod | `src/core/schemas/appointmentSchema.ts:appointmentSchema` | El calendario muestra los slots disponibles para citas médicas; El usuario puede seleccionar un slot disponible para reservar; El formulario de reserva valida que el horario seleccionado esté disponible y que los datos del paciente sean válidos; La reserva falla con mensaje claro si el slot ya está ocupado | — | — |
| f2 — Implementación de la reprogramación y cancelación de citas | Renderizado de lista con acciones condicionales | `src/features/appointments/AppointmentList.tsx:AppointmentList` | El usuario puede ver sus citas agendadas; El usuario puede seleccionar una cita para reprogramar o cancelar; La reprogramación valida que el nuevo horario esté disponible y que la cita esté en estado reprogramable; La cancelación valida que la cita esté en estado cancelable; La reprogramación/cancelación falla con mensaje claro si no cumple las validaciones | — | — |
| f2 — Implementación de la reprogramación y cancelación de citas | Gestión de transiciones de estado para citas | `src/core/hooks/useAppointmentActions.ts:useAppointmentActions` | El usuario puede ver sus citas agendadas; El usuario puede seleccionar una cita para reprogramar o cancelar; La reprogramación valida que el nuevo horario esté disponible y que la cita esté en estado reprogramable; La cancelación valida que la cita esté en estado cancelable; La reprogramación/cancelación falla con mensaje claro si no cumple las validaciones | — | — |
| f3 — Implementación de notificaciones | Gestión de envío de notificaciones con reintentos | `src/core/hooks/useNotifications.ts:useNotifications` | Se envía una notificación de confirmación al reservar/reprogramar una cita; Se envía un recordatorio 24 horas antes de la cita; Las notificaciones fallidas se reintentan automáticamente; El sistema muestra un mensaje de error si no puede enviar notificaciones después de varios intentos; El usuario puede ver el historial de notificaciones enviadas | — | — |
| f3 — Implementación de notificaciones | Adaptación de servicio de notificaciones externo | — | Se envía una notificación de confirmación al reservar/reprogramar una cita; Se envía un recordatorio 24 horas antes de la cita; Las notificaciones fallidas se reintentan automáticamente; El sistema muestra un mensaje de error si no puede enviar notificaciones después de varios intentos; El usuario puede ver el historial de notificaciones enviadas | — | — |
| f4 — Optimización y mejoras | Mapeo consistente de errores de aplicación | — | El calendario renderiza un 30% más rápido según métricas de rendimiento; Los errores de la aplicación se muestran con un formato consistente; Las funcionalidades existentes siguen pasando todas las pruebas de aceptación | — | — |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Usar React Query para manejo de estado asíncrono | chequeo estatico (code): exige `useQuery`, `useMutation` | Restriccion no verificada en chequeo estatico (code): exige `useQuery`, `useMutation` |
| Validar horarios con Zod | chequeo estatico (code): exige `z.object(`, `z.date()` | Verificada |

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (20)

- `src/main.tsx`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `src/core/ports/SlotSelectionPort.ts`
- `src/core/ports/AppointmentRepositoryPort.ts`
- `src/features/calendar/Calendar.tsx`
- `src/core/hooks/useAppointment.ts`
- `src/core/schemas/appointmentSchema.ts`
- `src/features/appointments/AppointmentList.tsx`
- `src/core/hooks/useAppointmentActions.ts`
- `src/core/hooks/useNotifications.ts`
- `src/core/ports/AppointmentActionPort.ts`
- `src/infrastructure/adapters/AppointmentActionAdapter.ts`
- `src/core/ports/NotificationServicePort.ts`
- `src/core/ports/ValidationPort.ts`
- `src/infrastructure/adapters/SlotSelectionAdapter.ts`
- `src/infrastructure/adapters/AppointmentRepositoryAdapter.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/features/calendar` (presente)
- `src/features/appointments` (presente)
- `src/features/notifications` (ausente)
- `src/core/hooks` (presente)
- `src/core/models` (ausente)
- `src/core/ports` (presente)
- `src/core/schemas` (presente)
- `src/core/adapters` (ausente)
- `src/shared/components` (ausente)
- `src/shared/utils` (ausente)
- `src/shared/types` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón de componentes contenedor/presentacional con hooks personalizados y separación de responsabilidades**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2
- Brecha que el reto ataca: Aplicacion React para reservar, reprogramar y cancelar citas medicas con calendario y validaciones de horario

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
