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