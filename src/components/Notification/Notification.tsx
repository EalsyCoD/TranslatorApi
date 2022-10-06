import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/store/reducers';

import { Item } from './item';

import { Container } from './styles';

export const Notifications = (): JSX.Element => {
  const notification = useSelector((state: RootState) => state.notification);

  return (
    <Container>
      {notification.map((el) => (
        <Item key={el.id} message={el.message} status={el.status} />
      ))}
    </Container>
  );
};
