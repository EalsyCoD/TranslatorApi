import React from 'react'

import { Container, SwitcherIcon, Title } from './styles'

interface SwitchProps {
  toggleTheme(): void
  titleTheme: string
}

export const Switch: React.FC<SwitchProps> = ({ toggleTheme, titleTheme }) => (
  <Container onClick={toggleTheme}>
    <Title>{titleTheme}</Title>
    <SwitcherIcon />
  </Container>
)
