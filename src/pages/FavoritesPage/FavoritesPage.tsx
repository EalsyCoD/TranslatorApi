import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/Button/Button'
import { FavoritesWords } from 'features/FavoritesWords'

import { Container, FavoritesContainer, HeaderContainer, Title } from './styles'

export function FavoritesPage() {
  const navigate = useNavigate()
  const HandleNavigate = () => {
    navigate(-1)
  }
  return (
    <Container>
      <HeaderContainer>
        <Title>Favorites Translated Words</Title>
        <Button textButton="Go to back" onClick={HandleNavigate} />
      </HeaderContainer>
      <FavoritesContainer>
        <FavoritesWords />
      </FavoritesContainer>
    </Container>
  )
}
