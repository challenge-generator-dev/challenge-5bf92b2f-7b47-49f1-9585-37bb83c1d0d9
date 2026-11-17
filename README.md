# Desarrollo de una aplicación React para gestión de citas médicas

El sistema permite a los pacientes reservar, reprogramar y cancelar citas médicas. Incluye un calendario para visualizar la disponibilidad y validaciones para asegurar que las citas no se superpongan ni se programen fuera del horario de atención. Los pacientes pueden ver su historial de citas y recibir notificaciones de confirmación y recordatorios.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Agenda de citas médicas |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 20 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** React 19
- **Version:** Node 20

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Implementación del calendario de citas

**Objetivo:** Crear un componente de calendario que muestre la disponibilidad de citas y permita la reserva.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- El calendario debe mostrar los días disponibles para citas.
- Los pacientes deben poder seleccionar un día y un horario para reservar una cita.
- La reserva debe validar que el horario seleccionado no esté ya ocupado.

**Entregable:** Componente de calendario funcional que permite la reserva de citas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar los estados del calendario y las citas.
- Piensa en cómo validar la disponibilidad de horarios.

</details>

### Fase 2: Implementación de la reprogramación y cancelación de citas

**Objetivo:** Añadir funcionalidades para reprogramar y cancelar citas existentes.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Los pacientes deben poder ver su historial de citas.
- Deben tener la opción de reprogramar o cancelar una cita.
- La reprogramación debe validar la nueva fecha y horario para asegurar que no haya superposición.

**Entregable:** Componentes adicionales que permiten reprogramar y cancelar citas, con validaciones apropiadas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo gestionar el historial de citas del paciente.
- Piensa en las validaciones necesarias para la reprogramación de citas.

</details>

### Fase 3: Implementación de notificaciones

**Objetivo:** Añadir notificaciones de confirmación y recordatorios para las citas.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Los pacientes deben recibir una notificación de confirmación al reservar una cita.
- Deben recibir un recordatorio antes de la cita.
- Considera cómo manejar las notificaciones en diferentes estados de la cita (pendiente, confirmada, cancelada).

**Entregable:** Sistema de notificaciones que envía confirmaciones y recordatorios a los pacientes.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo gestionar los diferentes estados de las citas y las notificaciones correspondientes.
- Considera la mejor forma de enviar las notificaciones al usuario.

</details>

### Fase 4: Optimización y mejoras

**Objetivo:** Optimizar el rendimiento y añadir mejoras a la aplicación.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Refactorizar el componente `Calendar` (p1) para usar memoización y evitar renders innecesarios
- Implementar un adaptador de errores (p8) para manejar errores de forma consistente en toda la aplicación
- Añadir pruebas de aceptación para validar que las optimizaciones no rompen funcionalidades existentes
- Verificar que todas las piezas mantienen sus responsabilidades exclusivas después de las mejoras

**Entregable:** Implementación de optimizaciones de rendimiento y mejoras UX en las piezas existentes

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo identificar y solucionar cuellos de botella en el rendimiento.
- Considera trade-offs entre rendimiento y usabilidad al añadir nuevas funcionalidades.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es el componente de calendario y cómo funciona?
- **paraQueSirve**: ¿Para qué sirve el sistema de notificaciones y cómo se integra con el resto de la aplicación?
- **comoSeUsa**: ¿Cómo se usa el historial de citas para reprogramar y cancelar citas?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones para la reprogramación de citas?
- **queDecisionesImplica**: ¿Qué decisiones implica la optimización del rendimiento y la adición de nuevas funcionalidades?

## Criterios de Evaluacion

- Implementación del componente de calendario que muestra la disponibilidad de citas y permite la reserva.
- Añadir funcionalidades para reprogramar y cancelar citas, con validaciones apropiadas.
- Implementación de un sistema de notificaciones que envía confirmaciones y recordatorios a los pacientes.
- Optimización del rendimiento y adición de mejoras a la aplicación.

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

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Usar React Query para manejo de estado asíncrono | chequeo estatico (code): exige `useQuery`, `useMutation` | Restriccion no verificada en chequeo estatico (code): exige `useQuery`, `useMutation` |
| Validar horarios con Zod | chequeo estatico (code): exige `z.object(`, `z.date()` | Verificada |

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
