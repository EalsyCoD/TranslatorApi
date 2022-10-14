import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavorites } from 'src/store/actions/FavoritesAction';
import { RootState } from 'src/store/reducers';

import { Container, Title, ContainerItems, ItemsContainer } from './styles';

export const FavoritesWords = () => {
  const dispatch = useDispatch();
  const stateFavoritesWords = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  React.useEffect(() => {
    dispatch(getFavorites());
  }, [ dispatch ]);

  return (
    <>
      <Container>
        <Title>From</Title>
        <Title>To</Title>
      <ContainerItems>
        {stateFavoritesWords.length
          ? (
          <>
            {stateFavoritesWords.map((item, i) => (
              <React.Fragment key={i}>
                <ItemsContainer>
                <Title>{item.from}</Title>
                <Title>{item.to}</Title>
                </ItemsContainer>
              </React.Fragment>
            ))}
          </>
            )
          : (
          <>You didnt have features words</>
            )}
      </ContainerItems>
      </Container>
    </>
  );
};
