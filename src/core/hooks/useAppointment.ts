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