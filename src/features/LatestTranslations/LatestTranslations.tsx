import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLatestTranslates } from 'src/store/actions/LastTranslatesAction';
import { RootState } from 'src/store/reducers';

import {
  Container,
  ContainerItems,
  HeaderText,
  Title,
  TitleGrid,
} from './styles';

export const LastTranslations = () => {
  const dispatch = useDispatch();

  const stateLastTranslates = useSelector(
    (state: RootState) => state.lastTranslates.lastTranslates,
  );

  React.useEffect(() => {
    dispatch(getLatestTranslates());
  }, [ dispatch ]);

  return (
    <>
      <Container>
        <HeaderText>Last Translates</HeaderText>
        <TitleGrid>
          <Title>From</Title>
          <Title>To</Title>
        </TitleGrid>
        <ContainerItems>
          {stateLastTranslates.length
            ? (
            <>
              {stateLastTranslates.map((item, i) => (
                <React.Fragment key={i}>
                  <TitleGrid>
                    <Title>{item.from}</Title>
                    <Title>{item.to}</Title>
                  </TitleGrid>
                </React.Fragment>
              ))}
            </>
              )
            : (
            <>No translates</>
              )}
        </ContainerItems>
      </Container>
    </>
  );
};
