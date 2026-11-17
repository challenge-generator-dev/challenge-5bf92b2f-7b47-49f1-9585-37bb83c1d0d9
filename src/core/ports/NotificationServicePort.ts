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