import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';

import { FavoritesWords } from 'features/FavoritesWords';

import { Container, HeaderContainer, Title, FavoritesContainer } from './styles';

export const FavoritesPage = () => {

  const navigate = useNavigate();
  const HandleNavigate = () => {
    navigate(-1);
  };
  return (
    <React.Fragment>
      <Container>
        <HeaderContainer>
        <Title>Favorites Translated Words</Title>
        <Button textButton='Go to back' onClick={HandleNavigate} />
        </HeaderContainer>
        <FavoritesContainer>
        <FavoritesWords />
        </FavoritesContainer>
      </Container>
    </React.Fragment>
  );
};
