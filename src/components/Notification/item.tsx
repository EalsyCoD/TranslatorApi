import React from "react";
import { NotificationStatus } from "src/store/types";

import { Icon, Message, Notification } from "./styles";

import IconError from "../../assets/icon/icon-error.svg";

interface NotificationProps {
  message: string;
  status: NotificationStatus;
}

const Item: React.FC<NotificationProps> = ({ message, status }) => {
  if (status === "error") {
    return (
      <Notification color="#df2b2b">
        <Icon src={IconError} alt="icon" />
        <Message>{message}</Message>
      </Notification>
    );
  } else {
    return <></>;
  }
};

export { Item };
