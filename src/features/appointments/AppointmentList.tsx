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