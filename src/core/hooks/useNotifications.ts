// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useCallback } from 'react';
import { NotificationServicePort } from '../ports/NotificationServicePort';

export type NotificationType = 'confirmation' | 'reminder' | 'cancellation' | 'reschedule';

export interface Notification {
  id: string;
  type: NotificationType;
  appointmentId: string;
  sentAt: Date;
  status: 'pending' | 'sent' | 'failed';
  error?: string;
}

export interface NotificationError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

interface UseNotificationsReturn {
  notifications: Notification[];
  sendNotification: (type: NotificationType, appointmentId: string) => Promise<void>;
  retryFailedNotifications: () => Promise<void>;
  error: NotificationError | null;
}

const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 2000;

export function useNotifications(
  notificationService?: NotificationServicePort
): UseNotificationsReturn {
  throw new Error('TODO(reto): useNotifications');
}

export default useNotifications;