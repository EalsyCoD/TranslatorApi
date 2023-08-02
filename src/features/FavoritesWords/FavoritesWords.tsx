import React from 'react'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { getFavoritesSave } from 'store/ActionsCreators/FavoritesAction'
import { RootState } from 'store/reducers'

import { Container, ContainerItems, ItemsContainer, Title } from './styles'

export function FavoritesWords() {
  const dispatch = useAppDispatch()
  const stateFavoritesWords = useAppSelector(
    (state: RootState) => state.favorites.favorites,
  )
  React.useEffect(() => {
    dispatch(getFavoritesSave())
  }, [dispatch])

  return (
    <Container>
      <Title>From</Title>
      <Title>To</Title>
      <ContainerItems>
        {stateFavoritesWords.length ? (
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
        ) : (
          <>You didnt have features words</>
        )}
      </ContainerItems>
    </Container>
  )
}
