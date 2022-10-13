import React from 'react';

import { LastTranslations } from '../LatestTranslations/LatestTranslations';

import { Container, ContainerTextArea, ContainerLastTranslates } from './styles';
import { TranslateFor } from '../TranslateFor';
import { TranslateTo } from '../TranslateTo';

export const TranslateArea = () => {
  return (
    <>
      <Container>
        <ContainerTextArea>
          <TranslateFor />
        </ContainerTextArea>
        <ContainerTextArea>
          <TranslateTo />
        </ContainerTextArea>
        <ContainerLastTranslates>
        <LastTranslations />
        </ContainerLastTranslates>
      </Container>
    </>
  );
};
