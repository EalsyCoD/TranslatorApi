import React from "react";
import { FavoritesWords } from "src/features/FavoritesWords";

import { Container, Title } from "./styles";

export const FavoritesPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Title>Favorites Translated Words </Title>
        <FavoritesWords />
      </Container>
    </React.Fragment>
  );
};
