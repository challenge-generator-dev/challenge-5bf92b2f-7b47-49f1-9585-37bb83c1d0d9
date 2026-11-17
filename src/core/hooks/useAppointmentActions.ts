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