import React from 'react'

import { LastTranslations } from '../LatestTranslations/LatestTranslations'
import { TranslateFor } from '../TranslateFor'
import { TranslateTo } from '../TranslateTo'

import { Container, ContainerLastTranslates, ContainerTextArea } from './styles'

export function TranslateArea() {
  return (
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
  )
}
