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