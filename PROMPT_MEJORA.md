# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/features/calendar/Calendar.tsx` — La pieza p1 (Renderizado condicional de slots disponibles/ocupados, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/hooks/useAppointment.ts` — La pieza p2 (Gestión de estado asíncrono para slots disponibles, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/schemas/appointmentSchema.ts` — La pieza p3 (Validación de datos de formulario con Zod, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/appointments/AppointmentList.tsx` — La pieza p4 (Renderizado de lista con acciones condicionales, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/hooks/useAppointmentActions.ts` — La pieza p5 (Gestión de transiciones de estado para citas, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/hooks/useNotifications.ts` — La pieza p6 (Gestión de envío de notificaciones con reintentos, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/infrastructure/adapters/AppointmentActionAdapter.ts` — absorbida: fuga de la pieza p5
- `src/infrastructure/adapters/AppointmentRepositoryAdapter.ts` — absorbida: fuga de la pieza p5

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2

### Brecha de conocimiento
Aplicacion React para reservar, reprogramar y cancelar citas medicas con calendario y validaciones de horario

### Reto
- Tema: Agenda de citas médicas
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de una aplicación React para gestión de citas médicas
- Tiempo estimado: 20 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Implementación del calendario de citas — objetivo: Crear un componente de calendario que muestre la disponibilidad de citas y permita la reserva. — entregable (NO resolver): Componente de calendario funcional que permite la reserva de citas.
- Fase 2: Implementación de la reprogramación y cancelación de citas — objetivo: Añadir funcionalidades para reprogramar y cancelar citas existentes. — entregable (NO resolver): Componentes adicionales que permiten reprogramar y cancelar citas, con validaciones apropiadas.
- Fase 3: Implementación de notificaciones — objetivo: Añadir notificaciones de confirmación y recordatorios para las citas. — entregable (NO resolver): Sistema de notificaciones que envía confirmaciones y recordatorios a los pacientes.
- Fase 4: Optimización y mejoras — objetivo: Optimizar el rendimiento y añadir mejoras a la aplicación. — entregable (NO resolver): Implementación de optimizaciones de rendimiento y mejoras UX en las piezas existentes

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>Aplicación de Citas Médicas</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build",
    "test": "vitest run"
  },
  "dependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5",
    "vitest": "1.6.1",
    "zod": "3.25.76"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: src/core/ports/SlotSelectionPort.ts ===
/**
 * Puerto para la selección de slots disponibles en el calendario.
 * Define el contrato que deben implementar los adaptadores para obtener
 * los slots disponibles para reservar citas médicas.
 */
export interface SlotSelectionPort {
  /**
   * Obtiene los slots disponibles para una fecha específica.
   * @param date Fecha para la cual se desean obtener los slots disponibles.
   * @returns Promise con un array de slots disponibles, cada uno con su hora de inicio y fin.
   */
  getAvailableSlots(date: Date): Promise<Slot[]>;

  /**
   * Reserva un slot específico para una cita médica.
   * @param slot Slot a reservar.
   * @param patientId ID del paciente que reserva el slot.
   * @returns Promise con el slot reservado, incluyendo el ID de la cita generada.
   */
  reserveSlot(slot: Slot, patientId: string): Promise<ReservedSlot>;
}

/**
 * Representa un slot de tiempo disponible en el calendario.
 */
export interface Slot {
  id: string;
  startTime: Date;
  endTime: Date;
  available: boolean;
}

/**
 * Representa un slot reservado con información adicional.
 */
export interface ReservedSlot extends Slot {
  appointmentId: string;
  patientId: string;
}

// === ARCHIVO: src/core/ports/AppointmentRepositoryPort.ts ===
/**
 * Puerto para el repositorio de citas médicas.
 * Define el contrato para gestionar las citas médicas, incluyendo
 * la creación, actualización, cancelación y consulta de citas.
 */
export interface AppointmentRepositoryPort {
  /**
   * Crea una nueva cita médica.
   * @param appointment Datos de la cita a crear.
   * @returns Promise con la cita creada, incluyendo su ID.
   */
  createAppointment(appointment: AppointmentCreate): Promise<Appointment>;

  /**
   * Actualiza una cita médica existente.
   * @param appointmentId ID de la cita a actualizar.
   * @param updateData Datos actualizados de la cita.
   * @returns Promise con la cita actualizada.
   */
  updateAppointment(appointmentId: string, updateData: AppointmentUpdate): Promise<Appointment>;

  /**
   * Cancela una cita médica.
   * @param appointmentId ID de la cita a cancelar.
   * @param cancellationReason Razón de la cancelación.
   * @returns Promise con la cita cancelada.
   */
  cancelAppointment(appointmentId: string, cancellationReason: string): Promise<Appointment>;

  /**
   * Obtiene una cita médica por su ID.
   * @param appointmentId ID de la cita a obtener.
   * @returns Promise con la cita encontrada.
   */
  getAppointmentById(appointmentId: string): Promise<Appointment | null>;

  /**
   * Obtiene todas las citas de un paciente.
   * @param patientId ID del paciente.
   * @returns Promise con un array de citas del paciente.
   */
  getAppointmentsByPatient(patientId: string): Promise<Appointment[]>;

  /**
   * Obtiene todas las citas para una fecha específica.
   * @param date Fecha para la cual se desean obtener las citas.
   * @returns Promise con un array de citas para la fecha especificada.
   */
  getAppointmentsByDate(date: Date): Promise<Appointment[]>;
}

/**
 * Datos necesarios para crear una nueva cita médica.
 */
export interface AppointmentCreate {
  patientId: string;
  doctorId: string;
  startTime: Date;
  endTime: Date;
  reason: string;
}

/**
 * Datos que pueden actualizarse en una cita médica.
 */
export interface AppointmentUpdate {
  startTime?: Date;
  endTime?: Date;
  reason?: string;
  status?: AppointmentStatus;
}

/**
 * Representa una cita médica con todos sus atributos.
 */
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  startTime: Date;
  endTime: Date;
  reason: string;
  status: AppointmentStatus;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Estados posibles de una cita médica.
 */
export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED'
}

// === ARCHIVO: src/features/calendar/Calendar.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';
import { Slot, SlotSelectionPort } from '../../core/ports/SlotSelectionPort';

interface CalendarProps {
  availableSlots: Slot[];
  onSlotSelect: (slot: Slot) => void;
}

interface SlotStatus {
  slot: Slot;
  status: 'available' | 'occupied';
}

function getSlotStatus(slot: Slot): 'available' | 'occupied' {
  throw new Error('TODO(reto): getSlotStatus');
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function Calendar({ availableSlots, onSlotSelect }: CalendarProps): JSX.Element {
  const [selectedDate] = React.useState<Date>(new Date());
  const [slotSelectionAdapter] = React.useState<SlotSelectionPort | null>(null);

  const slotsByStatus: SlotStatus[] = React.useMemo(() => {
    return availableSlots.map(slot => ({
      slot,
      status: getSlotStatus(slot)
    }));
  }, [availableSlots]);

  const handleSlotClick = async (slotStatus: SlotStatus) => {
    if (slotStatus.status === 'available') {
      if (slotSelectionAdapter) {
        await slotSelectionAdapter.reserveSlot(slotStatus.slot, 'patient-123');
      }
      onSlotSelect(slotStatus.slot);
    }
  };

  const availableCount = slotsByStatus.filter(s => s.status === 'available').length;
  const occupiedCount = slotsByStatus.filter(s => s.status === 'occupied').length;

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <h2 className="calendar-title">Agenda de Citas</h2>
        <p className="calendar-date">{formatDate(selectedDate)}</p>
      </header>

      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-dot legend-dot--available"></span>
          <span className="legend-text">Disponibles ({availableCount})</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot legend-dot--occupied"></span>
          <span className="legend-text">Ocupados ({occupiedCount})</span>
        </div>
      </div>

      <div className="calendar-grid">
        {slotsByStatus.length === 0 ? (
          <div className="calendar-empty">
            <p>No hay horarios disponibles para esta fecha</p>
          </div>
        ) : (
          <ul className="slot-list">
            {slotsByStatus.map((slotStatus) => (
              <li
                key={slotStatus.slot.id}
                className={`slot-item slot-item--${slotStatus.status}`}
                onClick={() => handleSlotClick(slotStatus)}
                role="button"
                tabIndex={slotStatus.status === 'available' ? 0 : -1}
                aria-disabled={slotStatus.status === 'occupied'}
                aria-label={`Horario ${formatTime(slotStatus.slot.startTime)} - ${slotStatus.status === 'available' ? 'disponible' : 'ocupado'}`}
              >
                <span className="slot-time">
                  {formatTime(slotStatus.slot.startTime)} - {formatTime(slotStatus.slot.endTime)}
                </span>
                <span className="slot-status-label">
                  {slotStatus.status === 'available' ? 'Disponible' : 'Ocupado'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Calendar;

// === ARCHIVO: src/core/hooks/useAppointment.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect, useCallback } from 'react';
import { AppointmentRepositoryPort, Appointment } from '../ports/AppointmentRepositoryPort';
import { Slot } from '../ports/SlotSelectionPort';

export interface AppointmentError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface UseAppointmentReturn {
  availableSlots: Slot[];
  isLoading: boolean;
  error: AppointmentError | null;
  fetchSlots: (date: Date) => Promise<void>;
  appointments: Appointment[];
  fetchAppointments: (patientId: string) => Promise<void>;
}

export function useAppointment(
  repositoryPort?: AppointmentRepositoryPort
): UseAppointmentReturn {
  throw new Error('TODO(reto): useAppointment');
}

function generateMockSlots(date: Date): Slot[] {
  const slots: Slot[] = [];
  const baseDate = new Date(date);
  baseDate.setHours(8, 0, 0, 0);

  for (let i = 0; i < 10; i++) {
    const startTime = new Date(baseDate);
    startTime.setMinutes(startTime.getMinutes() + i * 30);

    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + 30);

    const isAvailable = i % 3 !== 0;

    slots.push({
      id: `slot-${i + 1}`,
      startTime,
      endTime,
      available: isAvailable
    });
  }

  return slots;
}

export default useAppointment;

// === ARCHIVO: src/core/schemas/appointmentSchema.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { z } from 'zod';
import { ValidationPort } from '../ports/ValidationPort';

export interface AppointmentFormData {
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  reason: string;
}

const patientSchema = z.object({
  patientId: z.string().min(1, 'Patient ID is required'),
  patientName: z.string().min(2, 'Patient name must be at least 2 characters'),
  patientEmail: z.string().email('Invalid email format'),
  patientPhone: z.string().min(10, 'Phone number must be at least 10 digits')
});

const timeSlotSchema = z.object({
  date: z.date(),
  startTime: z.date(),
  endTime: z.date()
}).refine(
  (data) => data.startTime < data.endTime,
  {
    message: 'End time must be after start time',
    path: ['endTime']
  }
).refine(
  (data) => {
    throw new Error('TODO(reto): refine');
  },
  {
    message: 'Invalid time slot',
    path: ['startTime']
  }
);

const appointmentDetailsSchema = z.object({
  doctorId: z.string().min(1, 'Doctor ID is required'),
  reason: z.string().min(5, 'Reason must be at least 5 characters')
});

export const appointmentSchema = z.object({
  ...patientSchema.shape,
  ...timeSlotSchema.schema.shape,
  ...appointmentDetailsSchema.shape
}).refine(
  async (data) => {
    throw new Error('TODO(reto): refine');
  },
  {
    message: 'Slot not available',
    path: ['startTime']
  }
);

function getValidationPort(): ValidationPort | null {
  throw new Error('TODO(reto): getValidationPort');
}

export function validateAppointment(data: unknown): {
  success: boolean;
  data?: AppointmentFormData;
  errors?: z.ZodError;
} {
  const result = appointmentSchema.safeParse(data);

  if (result.success) {
    return {
      success: true,
      data: result.data as AppointmentFormData
    };
  }

  return {
    success: false,
    errors: result.error
  };
}

export function getValidationErrors(error: z.ZodError): Record<string, string> {
  throw new Error('TODO(reto): getValidationErrors');
}

export default appointmentSchema;

// === ARCHIVO: src/features/appointments/AppointmentList.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Appointment, AppointmentStatus } from '../../core/ports/AppointmentRepositoryPort';
import { AppointmentActionPort } from '../../core/ports/AppointmentActionPort';

interface AppointmentListProps {
  appointments: Appointment[];
  onReschedule: (id: string) => void;
  onCancel: (id: string) => void;
}

interface AvailableActions {
  canReschedule: boolean;
  canCancel: boolean;
}

function getAvailableActions(status: AppointmentStatus): AvailableActions {
  throw new Error('TODO(reto): getAvailableActions');
}

function formatDateTime(date: Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function getStatusLabel(status: AppointmentStatus): string {
  const labels: Record<AppointmentStatus, string> = {
    [AppointmentStatus.SCHEDULED]: 'Agendada',
    [AppointmentStatus.CONFIRMED]: 'Confirmada',
    [AppointmentStatus.CANCELLED]: 'Cancelada',
    [AppointmentStatus.COMPLETED]: 'Completada'
  };
  return labels[status] || status;
}

function getStatusClass(status: AppointmentStatus): string {
  const classes: Record<AppointmentStatus, string> = {
    [AppointmentStatus.SCHEDULED]: 'status-scheduled',
    [AppointmentStatus.CONFIRMED]: 'status-confirmed',
    [AppointmentStatus.CANCELLED]: 'status-cancelled',
    [AppointmentStatus.COMPLETED]: 'status-completed'
  };
  return classes[status] || 'status-default';
}

export function AppointmentList({ appointments, onReschedule, onCancel }: AppointmentListProps): JSX.Element {
  if (!appointments || appointments.length === 0) {
    return (
      <div className="appointment-list-empty">
        <p className="appointment-list-empty-text">No tienes citas programadas</p>
      </div>
    );
  }

  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );

  return (
    <div className="appointment-list">
      <h2 className="appointment-list-title">Mis Citas</h2>
      <ul className="appointment-list-items">
        {sortedAppointments.map((appointment) => {
          const actions = getAvailableActions(appointment.status);
          const startDate = new Date(appointment.startTime);
          const isPast = startDate < new Date();

          return (
            <li key={appointment.id} className="appointment-item">
              <div className="appointment-item-header">
                <span className={`appointment-status ${getStatusClass(appointment.status)}`}>
                  {getStatusLabel(appointment.status)}
                </span>
              </div>
              
              <div className="appointment-item-details">
                <p className="appointment-datetime">
                  {formatDateTime(appointment.startTime)}
                </p>
                <p className="appointment-reason">
                  {appointment.reason}
                </p>
                <p className="appointment-id">
                  ID: {appointment.id}
                </p>
              </div>

              <div className="appointment-item-actions">
                {actions.canReschedule && !isPast && (
                  <button
                    type="button"
                    className="appointment-action-btn appointment-action-reschedule"
                    onClick={() => onReschedule(appointment.id)}
                    aria-label={`Reprogramar cita ${appointment.id}`}
                  >
                    Reprogramar
                  </button>
                )}
                
                {actions.canCancel && !isPast && (
                  <button
                    type="button"
                    className="appointment-action-btn appointment-action-cancel"
                    onClick={() => onCancel(appointment.id)}
                    aria-label={`Cancelar cita ${appointment.id}`}
                  >
                    Cancelar
                  </button>
                )}
                
                {isPast && (
                  <span className="appointment-past-notice">Cita pasada</span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppointmentList;

// === ARCHIVO: src/core/hooks/useAppointmentActions.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useCallback } from 'react';
import { AppointmentRepositoryPort, Appointment, AppointmentStatus } from '../ports/AppointmentRepositoryPort';
import { Slot } from '../ports/SlotSelectionPort';

export interface AppointmentError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

interface UseAppointmentActionsReturn {
  rescheduleAppointment: (id: string, newSlot: Slot) => Promise<void>;
  cancelAppointment: (id: string) => Promise<void>;
  isLoading: boolean;
  error: AppointmentError | null;
}

export function useAppointmentActions(
  repositoryPort?: AppointmentRepositoryPort
): UseAppointmentActionsReturn {
  throw new Error('TODO(reto): useAppointmentActions');
}

export default useAppointmentActions;

// === ARCHIVO: src/core/hooks/useNotifications.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useCallback } from 'react';
import { NotificationServicePort } from '../ports/NotificationServicePort';

export type NotificationType = 'confirmation' | 'reminder' | 'cancellation' | 'reschedule';

export interface Notification {
  id: string;
  type: NotificationType;
  appointmentId: string;
  sentAt: Date;
  status: 'pending' | 'sent' | 'failed';
  error?: string;
}

export interface NotificationError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

interface UseNotificationsReturn {
  notifications: Notification[];
  sendNotification: (type: NotificationType, appointmentId: string) => Promise<void>;
  retryFailedNotifications: () => Promise<void>;
  error: NotificationError | null;
}

const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 2000;

export function useNotifications(
  notificationService?: NotificationServicePort
): UseNotificationsReturn {
  throw new Error('TODO(reto): useNotifications');
}

export default useNotifications;

// === ARCHIVO: src/core/ports/AppointmentActionPort.ts ===
/**
 * Puerto para acciones de citas médicas.
 * Define el contrato de alto nivel para operaciones sobre citas:
 * reprogramación, cancelación y confirmación.
 * Este puerto orquesta las operaciones del repositorio y del servicio de slots.
 */
export interface AppointmentActionPort {
  /**
   * Reprograma una cita existente a un nuevo slot.
   * @param appointmentId ID de la cita a reprogramar.
   * @param newSlot Nuevo slot seleccionado para la cita.
   * @returns Promise con la cita reprogramada.
   */
  rescheduleAppointment(appointmentId: string, newSlot: {
    id: string;
    startTime: Date;
    endTime: Date;
  }): Promise<{
    id: string;
    patientId: string;
    doctorId: string;
    startTime: Date;
    endTime: Date;
    reason: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }>;

  /**
   * Cancela una cita médica.
   * @param appointmentId ID de la cita a cancelar.
   * @param cancellationReason Razón de la cancelación.
   * @returns Promise con la cita cancelada.
   */
  cancelAppointment(appointmentId: string, cancellationReason: string): Promise<{
    id: string;
    patientId: string;
    doctorId: string;
    startTime: Date;
    endTime: Date;
    reason: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }>;

  /**
   * Confirma una cita médica pendiente.
   * @param appointmentId ID de la cita a confirmar.
   * @returns Promise con la cita confirmada.
   */
  confirmAppointment(appointmentId: string): Promise<{
    id: string;
    patientId: string;
    doctorId: string;
    startTime: Date;
    endTime: Date;
    reason: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }>;

  /**
   * Verifica si una acción es permitida según el estado actual de la cita.
   * @param appointmentId ID de la cita a verificar.
   * @param action Acción a verificar ('reschedule' | 'cancel' | 'confirm').
   * @returns Promise con true si la acción es permitida, false en caso contrario.
   */
  isActionAllowed(appointmentId: string, action: 'reschedule' | 'cancel' | 'confirm'): Promise<boolean>;
}

/**
 * Errores específicos de las acciones de citas.
 */
export enum AppointmentActionErrorCode {
  APPOINTMENT_NOT_FOUND = 'APPOINTMENT_NOT_FOUND',
  INVALID_STATUS_TRANSITION = 'INVALID_STATUS_TRANSITION',
  SLOT_NOT_AVAILABLE = 'SLOT_NOT_AVAILABLE',
  ALREADY_CANCELLED = 'ALREADY_CANCELLED',
  ALREADY_COMPLETED = 'ALREADY_COMPLETED',
  PAST_APPOINTMENT = 'PAST_APPOINTMENT',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

/**
 * Error thrown when an appointment action fails.
 */
export class AppointmentActionError extends Error {
  constructor(
    public readonly code: AppointmentActionErrorCode,
    message: string,
    public readonly details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'AppointmentActionError';
  }
}

// === ARCHIVO: src/infrastructure/adapters/AppointmentActionAdapter.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { AppointmentActionPort, AppointmentActionError, AppointmentActionErrorCode } from '../../core/ports/AppointmentActionPort';
import { AppointmentRepositoryPort, AppointmentStatus } from '../../core/ports/AppointmentRepositoryPort';

export class AppointmentActionAdapter implements AppointmentActionPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryPort
  ) {}

  async confirmAppointment(appointmentId: string) {
    const existingAppointment = await this.appointmentRepository.getAppointmentById(appointmentId);
    
    if (!existingAppointment) {
      throw new AppointmentActionError(
        AppointmentActionErrorCode.APPOINTMENT_NOT_FOUND,
        `No se encontró la cita con ID: ${appointmentId}`
      );
    }

    if (existingAppointment.status === AppointmentStatus.CANCELLED) {
      throw new AppointmentActionError(
        AppointmentActionErrorCode.ALREADY_CANCELLED,
        'No se puede confirmar una cita cancelada'
      );
    }

    if (existingAppointment.status === AppointmentStatus.COMPLETED) {
      throw new AppointmentActionError(
        AppointmentActionErrorCode.ALREADY_COMPLETED,
        'La cita ya está completada'
      );
    }

    const isActionAllowed = await this.isActionAllowed(appointmentId, 'confirm');
    if (!isActionAllowed) {
      throw new AppointmentActionError(
        AppointmentActionErrorCode.INVALID_STATUS_TRANSITION,
        'La cita no está en un estado que permita confirmación'
      );
    }

    const confirmedAppointment = await this.appointmentRepository.updateAppointment(
      appointmentId,
      { status: AppointmentStatus.CONFIRMED }
    );

    return confirmedAppointment;
  }

  async isActionAllowed(
    appointmentId: string,
    action: 'reschedule' | 'cancel' | 'confirm'
  ): Promise<boolean> {
    const appointment = await this.appointmentRepository.getAppointmentById(appointmentId);
    
    if (!appointment) {
      return false;
    }

    const now = new Date();
    const isPastAppointment = appointment.startTime < now;

    if (isPastAppointment) {
      return false;
    }

    switch (action) {
      case 'reschedule':
        return (
          appointment.status === AppointmentStatus.SCHEDULED ||
          appointment.status === AppointmentStatus.CONFIRMED
        );
      
      case 'cancel':
        return (
          appointment.status === AppointmentStatus.SCHEDULED ||
          appointment.status === AppointmentStatus.CONFIRMED
        );
      
      case 'confirm':
        return appointment.status === AppointmentStatus.SCHEDULED;
      
      default:
        return false;
    }
  }

  async rescheduleAppointment(
    appointmentId: string,
    newSlot: { id: string; startTime: Date; endTime: Date }
  ): Promise<any> {
    throw new Error('TODO(reto): anonymous');
  }

  async cancelAppointment(appointmentId: string, cancellationReason: string): Promise<any> {
    throw new Error('TODO(reto): cancelAppointment');
  }
}

export function createAppointmentActionAdapter(
  appointmentRepository: AppointmentRepositoryPort
): AppointmentActionPort {
  return new AppointmentActionAdapter(appointmentRepository);
}

// === ARCHIVO: src/core/ports/NotificationServicePort.ts ===
/**
 * Puerto para el servicio de notificaciones.
 * Define el contrato para enviar notificaciones a los pacientes
 * sobre sus citas médicas (confirmaciones, recordatorios, cancelaciones).
 */
export interface NotificationServicePort {
  /**
   * Envía una notificación de confirmación de cita.
   * @param appointmentId ID de la cita confirmada.
   * @param patientId ID del paciente que recibe la notificación.
   * @returns Promise que se resuelve cuando la notificación se envía.
   */
  sendConfirmation(appointmentId: string, patientId: string): Promise<void>;

  /**
   * Envía un recordatorio de cita próxima.
   * @param appointmentId ID de la cita recordada.
   * @param patientId ID del paciente que recibe el recordatorio.
   * @returns Promise que se resuelve cuando el recordatorio se envía.
   */
  sendReminder(appointmentId: string, patientId: string): Promise<void>;

  /**
   * Envía una notificación de cancelación de cita.
   * @param appointmentId ID de la cita cancelada.
   * @param patientId ID del paciente que recibe la notificación.
   * @param reason Razón de la cancelación.
   * @returns Promise que se resuelve cuando la notificación se envía.
   */
  sendCancellation(appointmentId: string, patientId: string, reason: string): Promise<void>;

  /**
   * Envía una notificación de reprogramación de cita.
   * @param appointmentId ID de la cita reprogramada.
   * @param patientId ID del paciente que recibe la notificación.
   * @param oldDate Fecha anterior de la cita.
   * @param newDate Nueva fecha de la cita.
   * @returns Promise que se resuelve cuando la notificación se envía.
   */
  sendReschedule(
    appointmentId: string,
    patientId: string,
    oldDate: Date,
    newDate: Date
  ): Promise<void>;

  /**
   * Reintenta el envío de notificaciones que fallaron anteriormente.
   * @returns Promise con el número de notificaciones reenviadas.
   */
  retryFailedNotifications(): Promise<number>;

  /**
   * Obtiene el historial de notificaciones enviadas.
   * @param appointmentId ID de la cita (opcional).
   * @returns Promise con el array de notificaciones.
   */
  getNotificationHistory(appointmentId?: string): Promise<NotificationRecord[]>;
}

/**
 * Registro de una notificación enviada.
 */
export interface NotificationRecord {
  id: string;
  appointmentId: string;
  patientId: string;
  type: NotificationType;
  sentAt: Date;
  status: NotificationStatus;
  error?: string;
}

/**
 * Tipos de notificaciones disponibles.
 */
export type NotificationType = 'confirmation' | 'reminder' | 'cancellation' | 'reschedule';

/**
 * Estados posibles de una notificación.
 */
export type NotificationStatus = 'pending' | 'sent' | 'failed';

// === ARCHIVO: src/core/ports/ValidationPort.ts ===
/**
 * Puerto para validación de datos de citas médicas.
 * Define el contrato para validar los datos de reserva,
 * reprogramación y cancelación de citas.
 */
export interface ValidationPort {
  /**
   * Valida los datos de una nueva reserva de cita.
   * @param data Datos de la reserva a validar.
   * @returns Promise con el resultado de la validación.
   */
  validateAppointment(data: AppointmentValidationData): Promise<ValidationResult>;

  /**
   * Valida los datos para reprogramar una cita existente.
   * @param appointmentId ID de la cita a reprogramar.
   * @param newSlot Nuevo slot seleccionado.
   * @returns Promise con el resultado de la validación.
   */
  validateReschedule(
    appointmentId: string,
    newSlot: SlotValidationData
  ): Promise<ValidationResult>;

  /**
   * Valida una solicitud de cancelación de cita.
   * @param appointmentId ID de la cita a cancelar.
   * @param reason Razón de la cancelación.
   * @returns Promise con el resultado de la validación.
   */
  validateCancellation(
    appointmentId: string,
    reason: string
  ): Promise<ValidationResult>;

  /**
   * Valida que un slot específico esté disponible.
   * @param slot Slot a validar.
   * @returns Promise con el resultado de la validación.
   */
  validateSlotAvailability(slot: SlotValidationData): Promise<ValidationResult>;
}

/**
 * Datos de una cita para validar.
 */
export interface AppointmentValidationData {
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  reason: string;
}

/**
 * Datos de un slot para validar.
 */
export interface SlotValidationData {
  id: string;
  startTime: Date;
  endTime: Date;
}

/**
 * Resultado de una validación.
 */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Error de validación individual.
 */
export interface ValidationError {
  field: string;
  message: string;
  code: ValidationErrorCode;
}

/**
 * Códigos de error de validación.
 */
export enum ValidationErrorCode {
  REQUIRED_FIELD = 'REQUIRED_FIELD',
  INVALID_FORMAT = 'INVALID_FORMAT',
  SLOT_NOT_AVAILABLE = 'SLOT_NOT_AVAILABLE',
  SLOT_OCCUPIED = 'SLOT_OCCUPIED',
  PAST_DATE = 'PAST_DATE',
  OUT_OF_HOURS = 'OUT_OF_HOURS',
  INVALID_PHONE = 'INVALID_PHONE',
  INVALID_EMAIL = 'INVALID_EMAIL',
  APPOINTMENT_NOT_FOUND = 'APPOINTMENT_NOT_FOUND',
  INVALID_STATUS_TRANSITION = 'INVALID_STATUS_TRANSITION',
  CANNOT_CANCEL = 'CANNOT_CANCEL',
  CANNOT_RESCHEDULE = 'CANNOT_RESCHEDULE'
}

// === ARCHIVO: src/infrastructure/adapters/SlotSelectionAdapter.ts ===
/**
 * Adaptador para el puerto de selección de slots.
 * Implementa la conexión con el backend para obtener y reservar slots de citas.
 */
import { SlotSelectionPort, Slot, ReservedSlot } from '../../core/ports/SlotSelectionPort';

const API_BASE_URL = '/api/slots';

interface ApiSlotResponse {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

interface ApiReserveRequest {
  slotId: string;
  patientId: string;
}

interface ApiReserveResponse {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
  appointmentId: string;
  patientId: string;
}

function parseApiDate(dateString: string): Date {
  return new Date(dateString);
}

function formatDateForApi(date: Date): string {
  return date.toISOString();
}

async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Error HTTP ${response.status}: ${response.statusText}`
    );
  }
  return response.json();
}

export class SlotSelectionAdapter implements SlotSelectionPort {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async getAvailableSlots(date: Date): Promise<Slot[]> {
    try {
      const dateParam = formatDateForApi(date);
      const url = `${this.baseUrl}/available?date=${encodeURIComponent(dateParam)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const apiSlots: ApiSlotResponse[] = await handleApiResponse<ApiSlotResponse[]>(response);

      return apiSlots.map((apiSlot) => ({
        id: apiSlot.id,
        startTime: parseApiDate(apiSlot.startTime),
        endTime: parseApiDate(apiSlot.endTime),
        available: apiSlot.available,
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener slots disponibles';
      console.error('SlotSelectionAdapter.getAvailableSlots error:', message);
      throw new Error(message);
    }
  }

  async reserveSlot(slot: Slot, patientId: string): Promise<ReservedSlot> {
    try {
      const request: ApiReserveRequest = {
        slotId: slot.id,
        patientId,
      };

      const response = await fetch(`${this.baseUrl}/reserve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const apiReserved: ApiReserveResponse = await handleApiResponse<ApiReserveResponse>(response);

      return {
        id: apiReserved.id,
        startTime: parseApiDate(apiReserved.startTime),
        endTime: parseApiDate(apiReserved.endTime),
        available: apiReserved.available,
        appointmentId: apiReserved.appointmentId,
        patientId: apiReserved.patientId,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al reservar slot';
      console.error('SlotSelectionAdapter.reserveSlot error:', message);
      throw new Error(message);
    }
  }
}

export function createSlotSelectionAdapter(baseUrl?: string): SlotSelectionPort {
  return new SlotSelectionAdapter(baseUrl);
}

// === ARCHIVO: src/infrastructure/adapters/AppointmentRepositoryAdapter.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import {
  AppointmentRepositoryPort,
  Appointment,
  AppointmentCreate,
  AppointmentUpdate,
  AppointmentStatus,
} from '../../core/ports/AppointmentRepositoryPort';

const API_BASE_URL = '/api/appointments';

interface ApiAppointmentResponse {
  id: string;
  patientId: string;
  doctorId: string;
  startTime: string;
  endTime: string;
  reason: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiAppointmentCreate {
  patientId: string;
  doctorId: string;
  startTime: string;
  endTime: string;
  reason: string;
}

interface ApiAppointmentUpdate {
  startTime?: string;
  endTime?: string;
  reason?: string;
  status?: string;
}

function parseApiDate(dateString: string): Date {
  return new Date(dateString);
}

function formatDateForApi(date: Date): string {
  return date.toISOString();
}

function mapApiStatusToEnum(status: string): AppointmentStatus {
  const statusMap: Record<string, AppointmentStatus> = {
    SCHEDULED: AppointmentStatus.SCHEDULED,
    CONFIRMED: AppointmentStatus.CONFIRMED,
    CANCELLED: AppointmentStatus.CANCELLED,
    COMPLETED: AppointmentStatus.COMPLETED,
  };
  return statusMap[status] || AppointmentStatus.SCHEDULED;
}

function mapEnumToApiStatus(status: AppointmentStatus): string {
  return status;
}

async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Error HTTP ${response.status}: ${response.statusText}`
    );
  }
  return response.json();
}

function mapApiResponseToAppointment(apiAppointment: ApiAppointmentResponse): Appointment {
  return {
    id: apiAppointment.id,
    patientId: apiAppointment.patientId,
    doctorId: apiAppointment.doctorId,
    startTime: parseApiDate(apiAppointment.startTime),
    endTime: parseApiDate(apiAppointment.endTime),
    reason: apiAppointment.reason,
    status: mapApiStatusToEnum(apiAppointment.status),
    createdAt: parseApiDate(apiAppointment.createdAt),
    updatedAt: parseApiDate(apiAppointment.updatedAt),
  };
}

export class AppointmentRepositoryAdapter implements AppointmentRepositoryPort {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async createAppointment(appointment: AppointmentCreate): Promise<Appointment> {
    try {
      const request: ApiAppointmentCreate = {
        patientId: appointment.patientId,
        doctorId: appointment.doctorId,
        startTime: formatDateForApi(appointment.startTime),
        endTime: formatDateForApi(appointment.endTime),
        reason: appointment.reason,
      };

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const apiAppointment: ApiAppointmentResponse = await handleApiResponse<ApiAppointmentResponse>(response);
      return mapApiResponseToAppointment(apiAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al crear cita';
      console.error('AppointmentRepositoryAdapter.createAppointment error:', message);
      throw new Error(message);
    }
  }

  async updateAppointment(appointmentId: string, updateData: AppointmentUpdate): Promise<Appointment> {
    try {
      const request: ApiAppointmentUpdate = {};
      
      if (updateData.startTime !== undefined) {
        request.startTime = formatDateForApi(updateData.startTime);
      }
      if (updateData.endTime !== undefined) {
        request.endTime = formatDateForApi(updateData.endTime);
      }
      if (updateData.reason !== undefined) {
        request.reason = updateData.reason;
      }
      if (updateData.status !== undefined) {
        request.status = mapEnumToApiStatus(updateData.status);
      }

      const response = await fetch(`${this.baseUrl}/${appointmentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const apiAppointment: ApiAppointmentResponse = await handleApiResponse<ApiAppointmentResponse>(response);
      return mapApiResponseToAppointment(apiAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al actualizar cita';
      console.error('AppointmentRepositoryAdapter.updateAppointment error:', message);
      throw new Error(message);
    }
  }

  async getAppointmentById(appointmentId: string): Promise<Appointment | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${appointmentId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.status === 404) {
        return null;
      }

      const apiAppointment: ApiAppointmentResponse = await handleApiResponse<ApiAppointmentResponse>(response);
      return mapApiResponseToAppointment(apiAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener cita';
      console.error('AppointmentRepositoryAdapter.getAppointmentById error:', message);
      throw new Error(message);
    }
  }

  async getAppointmentsByPatient(patientId: string): Promise<Appointment[]> {
    try {
      const url = `${this.baseUrl}?patientId=${encodeURIComponent(patientId)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      const apiAppointments: ApiAppointmentResponse[] = await handleApiResponse<ApiAppointmentResponse[]>(response);
      return apiAppointments.map(mapApiResponseToAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener citas del paciente';
      console.error('AppointmentRepositoryAdapter.getAppointmentsByPatient error:', message);
      throw new Error(message);
    }
  }

  async getAppointmentsByDate(date: Date): Promise<Appointment[]> {
    try {
      const dateParam = formatDateForApi(date);
      const url = `${this.baseUrl}/by-date?date=${encodeURIComponent(dateParam)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      const apiAppointments: ApiAppointmentResponse[] = await handleApiResponse<ApiAppointmentResponse[]>(response);
      return apiAppointments.map(mapApiResponseToAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener citas por fecha';
      console.error('AppointmentRepositoryAdapter.getAppointmentsByDate error:', message);
      throw new Error(message);
    }
  }

  async cancelAppointment(appointmentId: string, cancellationReason: string): Promise<Appointment> {
    throw new Error('TODO(reto): cancelAppointment');
  }
}

export function createAppointmentRepositoryAdapter(baseUrl?: string): AppointmentRepositoryPort {
  return new AppointmentRepositoryAdapter(baseUrl);
}
```
