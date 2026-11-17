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