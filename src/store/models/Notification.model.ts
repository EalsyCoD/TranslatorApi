import { NotificationStateElement } from "src/shared/interfaces/Notification.interface";

export enum ENotificationActionType {
  NEW_NOTIFICATION = "NEW-NOTIFICATION",

  CLEAR_NOTIFICATION = "CLEAR-NOTIFICATION",
}

export interface INotification {
  type: ENotificationActionType.NEW_NOTIFICATION;
  payload: NotificationStateElement;
}
export interface INotificationClear {
  type: ENotificationActionType.CLEAR_NOTIFICATION;
  payload: NotificationStateElement;
}

export type TNotificationType = INotification | INotificationClear;
