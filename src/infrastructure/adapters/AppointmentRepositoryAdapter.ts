// TODO(reto): archivo stubbeado; implementa los cuerpos.
import {
  AppointmentRepositoryPort,
  Appointment,
  AppointmentCreate,
  AppointmentUpdate,
  AppointmentStatus,
} from '../../core/ports/AppointmentRepositoryPort';

const API_BASE_URL = '/api/appointments';

interface ApiAppointmentResponse {
  id: string;
  patientId: string;
  doctorId: string;
  startTime: string;
  endTime: string;
  reason: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiAppointmentCreate {
  patientId: string;
  doctorId: string;
  startTime: string;
  endTime: string;
  reason: string;
}

interface ApiAppointmentUpdate {
  startTime?: string;
  endTime?: string;
  reason?: string;
  status?: string;
}

function parseApiDate(dateString: string): Date {
  return new Date(dateString);
}

function formatDateForApi(date: Date): string {
  return date.toISOString();
}

function mapApiStatusToEnum(status: string): AppointmentStatus {
  const statusMap: Record<string, AppointmentStatus> = {
    SCHEDULED: AppointmentStatus.SCHEDULED,
    CONFIRMED: AppointmentStatus.CONFIRMED,
    CANCELLED: AppointmentStatus.CANCELLED,
    COMPLETED: AppointmentStatus.COMPLETED,
  };
  return statusMap[status] || AppointmentStatus.SCHEDULED;
}

function mapEnumToApiStatus(status: AppointmentStatus): string {
  return status;
}

async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Error HTTP ${response.status}: ${response.statusText}`
    );
  }
  return response.json();
}

function mapApiResponseToAppointment(apiAppointment: ApiAppointmentResponse): Appointment {
  return {
    id: apiAppointment.id,
    patientId: apiAppointment.patientId,
    doctorId: apiAppointment.doctorId,
    startTime: parseApiDate(apiAppointment.startTime),
    endTime: parseApiDate(apiAppointment.endTime),
    reason: apiAppointment.reason,
    status: mapApiStatusToEnum(apiAppointment.status),
    createdAt: parseApiDate(apiAppointment.createdAt),
    updatedAt: parseApiDate(apiAppointment.updatedAt),
  };
}

export class AppointmentRepositoryAdapter implements AppointmentRepositoryPort {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async createAppointment(appointment: AppointmentCreate): Promise<Appointment> {
    try {
      const request: ApiAppointmentCreate = {
        patientId: appointment.patientId,
        doctorId: appointment.doctorId,
        startTime: formatDateForApi(appointment.startTime),
        endTime: formatDateForApi(appointment.endTime),
        reason: appointment.reason,
      };

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const apiAppointment: ApiAppointmentResponse = await handleApiResponse<ApiAppointmentResponse>(response);
      return mapApiResponseToAppointment(apiAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al crear cita';
      console.error('AppointmentRepositoryAdapter.createAppointment error:', message);
      throw new Error(message);
    }
  }

  async updateAppointment(appointmentId: string, updateData: AppointmentUpdate): Promise<Appointment> {
    try {
      const request: ApiAppointmentUpdate = {};
      
      if (updateData.startTime !== undefined) {
        request.startTime = formatDateForApi(updateData.startTime);
      }
      if (updateData.endTime !== undefined) {
        request.endTime = formatDateForApi(updateData.endTime);
      }
      if (updateData.reason !== undefined) {
        request.reason = updateData.reason;
      }
      if (updateData.status !== undefined) {
        request.status = mapEnumToApiStatus(updateData.status);
      }

      const response = await fetch(`${this.baseUrl}/${appointmentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const apiAppointment: ApiAppointmentResponse = await handleApiResponse<ApiAppointmentResponse>(response);
      return mapApiResponseToAppointment(apiAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al actualizar cita';
      console.error('AppointmentRepositoryAdapter.updateAppointment error:', message);
      throw new Error(message);
    }
  }

  async getAppointmentById(appointmentId: string): Promise<Appointment | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${appointmentId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.status === 404) {
        return null;
      }

      const apiAppointment: ApiAppointmentResponse = await handleApiResponse<ApiAppointmentResponse>(response);
      return mapApiResponseToAppointment(apiAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener cita';
      console.error('AppointmentRepositoryAdapter.getAppointmentById error:', message);
      throw new Error(message);
    }
  }

  async getAppointmentsByPatient(patientId: string): Promise<Appointment[]> {
    try {
      const url = `${this.baseUrl}?patientId=${encodeURIComponent(patientId)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      const apiAppointments: ApiAppointmentResponse[] = await handleApiResponse<ApiAppointmentResponse[]>(response);
      return apiAppointments.map(mapApiResponseToAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener citas del paciente';
      console.error('AppointmentRepositoryAdapter.getAppointmentsByPatient error:', message);
      throw new Error(message);
    }
  }

  async getAppointmentsByDate(date: Date): Promise<Appointment[]> {
    try {
      const dateParam = formatDateForApi(date);
      const url = `${this.baseUrl}/by-date?date=${encodeURIComponent(dateParam)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      const apiAppointments: ApiAppointmentResponse[] = await handleApiResponse<ApiAppointmentResponse[]>(response);
      return apiAppointments.map(mapApiResponseToAppointment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener citas por fecha';
      console.error('AppointmentRepositoryAdapter.getAppointmentsByDate error:', message);
      throw new Error(message);
    }
  }

  async cancelAppointment(appointmentId: string, cancellationReason: string): Promise<Appointment> {
    throw new Error('TODO(reto): cancelAppointment');
  }
}

export function createAppointmentRepositoryAdapter(baseUrl?: string): AppointmentRepositoryPort {
  return new AppointmentRepositoryAdapter(baseUrl);
}