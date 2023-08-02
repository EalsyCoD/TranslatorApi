import React from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { getLatestTranslates } from 'store/ActionsCreators/LastTranslatesAction';

import { RootState } from 'store/reducers';

import {
  Container,
  ContainerItems,
  HeaderText,
  Title,
  TitleGrid,
} from './styles';

export function LastTranslations() {
  const dispatch = useAppDispatch()

  const stateLastTranslates = useAppSelector(
    (state: RootState) => state.translate.lastTranslates,
  )
  React.useEffect(() => {
    dispatch(getLatestTranslates())
  }, [dispatch])

  return (
    <Container>
      <HeaderText>Last Translates</HeaderText>
      <TitleGrid>
        <Title>From</Title>
        <Title>To</Title>
      </TitleGrid>
      <ContainerItems>
        {stateLastTranslates?.length ? (
          <>
            {stateLastTranslates?.map((item, i) => (
              <React.Fragment key={i}>
                <TitleGrid>
                  <Title>{item.from}</Title>
                  <Title>{item.to}</Title>
                </TitleGrid>
              </React.Fragment>
            ))}
          </>
        ) : (
          <>No translates</>
        )}
      </ContainerItems>
    </Container>
  )
}
