import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { RoutesPages } from './pages/routes';

import { Header } from './components';

import { setLanguages } from './store/actions/LanguageAction';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const [ theme, setTheme ] = React.useState<DefaultTheme>(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  React.useEffect(() => {
    dispatch(setLanguages());
  }, [ dispatch ]);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />

        <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
        <RoutesPages />
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default App;
