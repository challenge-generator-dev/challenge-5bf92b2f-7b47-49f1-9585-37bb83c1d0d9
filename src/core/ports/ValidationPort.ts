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