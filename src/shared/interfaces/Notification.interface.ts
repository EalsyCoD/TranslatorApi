import { TNotificationType } from "src/store/models/Notification.mode";

export type NotificationStateElement = {
  id: string;
  message: string;
  status: NotificationStatus;
};

export type NotificationStatus = "error" | "hello";

export type DispatchNotificationType = (
  args: TNotificationType
) => TNotificationType;
