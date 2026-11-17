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