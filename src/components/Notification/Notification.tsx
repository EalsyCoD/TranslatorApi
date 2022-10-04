import { Container } from "./styles";
import { Item } from "./item";
import { useSelector } from "react-redux";
import { RootState } from "src/store/types";
import React from "react";

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
