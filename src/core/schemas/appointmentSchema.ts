// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { z } from 'zod';
import { ValidationPort } from '../ports/ValidationPort';

export interface AppointmentFormData {
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

const patientSchema = z.object({
  patientId: z.string().min(1, 'Patient ID is required'),
  patientName: z.string().min(2, 'Patient name must be at least 2 characters'),
  patientEmail: z.string().email('Invalid email format'),
  patientPhone: z.string().min(10, 'Phone number must be at least 10 digits')
});

const timeSlotSchema = z.object({
  date: z.date(),
  startTime: z.date(),
  endTime: z.date()
}).refine(
  (data) => data.startTime < data.endTime,
  {
    message: 'End time must be after start time',
    path: ['endTime']
  }
).refine(
  (data) => {
    throw new Error('TODO(reto): refine');
  },
  {
    message: 'Invalid time slot',
    path: ['startTime']
  }
);

const appointmentDetailsSchema = z.object({
  doctorId: z.string().min(1, 'Doctor ID is required'),
  reason: z.string().min(5, 'Reason must be at least 5 characters')
});

export const appointmentSchema = z.object({
  ...patientSchema.shape,
  ...timeSlotSchema.schema.shape,
  ...appointmentDetailsSchema.shape
}).refine(
  async (data) => {
    throw new Error('TODO(reto): refine');
  },
  {
    message: 'Slot not available',
    path: ['startTime']
  }
);

function getValidationPort(): ValidationPort | null {
  throw new Error('TODO(reto): getValidationPort');
}

export function validateAppointment(data: unknown): {
  success: boolean;
  data?: AppointmentFormData;
  errors?: z.ZodError;
} {
  const result = appointmentSchema.safeParse(data);

  if (result.success) {
    return {
      success: true,
      data: result.data as AppointmentFormData
    };
  }

  return {
    success: false,
    errors: result.error
  };
}

export function getValidationErrors(error: z.ZodError): Record<string, string> {
  throw new Error('TODO(reto): getValidationErrors');
}

export default appointmentSchema;