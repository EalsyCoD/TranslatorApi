import React from 'react';

import { NotificationStatus } from 'src/shared/interfaces/Notification.interface';

import { Icon, Message, Notification } from './styles';

import IconSuccess from '../../assets/icon/icon-success.svg';
import IconError from '../../assets/icon/icon-error.svg';

interface NotificationProps {
  message: string;
  status: NotificationStatus;
}

const Item: React.FC<NotificationProps> = ({ message, status }) => {
  if (status === 'error') {
    return (
      <Notification color="#df2b2b">
        <Icon src={IconError} alt="icon" />
        <Message>{message}</Message>
      </Notification>
    );
  }
  if (status === 'success') {
    return (
      <Notification color="#2e7d32">
        <Icon src={IconSuccess} alt="icon" />
        <Message>{message}</Message>
      </Notification>
    );
  }
  return <></>;
};

export { Item };
