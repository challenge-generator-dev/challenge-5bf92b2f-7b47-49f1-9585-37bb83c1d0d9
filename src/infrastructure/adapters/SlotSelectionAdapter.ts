/**
 * Adaptador para el puerto de selección de slots.
 * Implementa la conexión con el backend para obtener y reservar slots de citas.
 */
import { SlotSelectionPort, Slot, ReservedSlot } from '../../core/ports/SlotSelectionPort';

const API_BASE_URL = '/api/slots';

interface ApiSlotResponse {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

interface ApiReserveRequest {
  slotId: string;
  patientId: string;
}

interface ApiReserveResponse {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
  appointmentId: string;
  patientId: string;
}

function parseApiDate(dateString: string): Date {
  return new Date(dateString);
}

function formatDateForApi(date: Date): string {
  return date.toISOString();
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

export class SlotSelectionAdapter implements SlotSelectionPort {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async getAvailableSlots(date: Date): Promise<Slot[]> {
    try {
      const dateParam = formatDateForApi(date);
      const url = `${this.baseUrl}/available?date=${encodeURIComponent(dateParam)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const apiSlots: ApiSlotResponse[] = await handleApiResponse<ApiSlotResponse[]>(response);

      return apiSlots.map((apiSlot) => ({
        id: apiSlot.id,
        startTime: parseApiDate(apiSlot.startTime),
        endTime: parseApiDate(apiSlot.endTime),
        available: apiSlot.available,
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al obtener slots disponibles';
      console.error('SlotSelectionAdapter.getAvailableSlots error:', message);
      throw new Error(message);
    }
  }

  async reserveSlot(slot: Slot, patientId: string): Promise<ReservedSlot> {
    try {
      const request: ApiReserveRequest = {
        slotId: slot.id,
        patientId,
      };

      const response = await fetch(`${this.baseUrl}/reserve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const apiReserved: ApiReserveResponse = await handleApiResponse<ApiReserveResponse>(response);

      return {
        id: apiReserved.id,
        startTime: parseApiDate(apiReserved.startTime),
        endTime: parseApiDate(apiReserved.endTime),
        available: apiReserved.available,
        appointmentId: apiReserved.appointmentId,
        patientId: apiReserved.patientId,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al reservar slot';
      console.error('SlotSelectionAdapter.reserveSlot error:', message);
      throw new Error(message);
    }
  }
}

export function createSlotSelectionAdapter(baseUrl?: string): SlotSelectionPort {
  return new SlotSelectionAdapter(baseUrl);
}