import React from 'react';

import { Switch } from '../Switch';

import { Container, Title } from './styles';

interface HeaderProps {
  toggleTheme(): void;
  titleTheme: string;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, titleTheme }) => {
  return (
    <React.Fragment>
      <Container>
        <Title>Translator Api</Title>
        <Switch toggleTheme={toggleTheme} titleTheme={titleTheme} />
      </Container>
    </React.Fragment>
  );
};
