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