import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "src/store/actions/FavoritesAction";
import { RootState } from "src/store/reducers";

import { Container, Title, ContainerItems } from "./styles";

export const FavoritesWords = () => {
  const dispatch = useDispatch();
  const stateFavoritesWords = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  React.useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <>
      <Container>
        <Title>From</Title>
        <Title>To</Title>
      </Container>
      <ContainerItems>
        {stateFavoritesWords.length ? (
          <>
            {stateFavoritesWords.map((item, i) => (
              <>
                <Title>{item.from}</Title>
                <Title>{item.to}</Title>
              </>
            ))}
          </>
        ) : (
          <>You didnt have features words</>
        )}
      </ContainerItems>
    </>
  );
};
