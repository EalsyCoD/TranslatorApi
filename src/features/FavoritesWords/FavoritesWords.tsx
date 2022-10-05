import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/types";

import { Container, Title } from "./styles";

export const FavoritesWords = () => {
  const dispatch = useDispatch();
  const stateFavoritesWords = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  React.useEffect(() => {}, []);

  return (
    <Container>
      <Title>From</Title>
      <Title>To</Title>
      <>
        <Title>{stateFavoritesWords.from}</Title>
        <Title>{stateFavoritesWords.to}</Title>
      </>
    </Container>
  );
};
