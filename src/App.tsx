import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useDispatch } from 'react-redux';

import { RoutesPages } from './pages/routes';

import { Header, Notifications } from './components';

import { setNotification } from './store/actions/NotificationAction';
import { setLanguages } from './store/actions/LanguageAction';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { HashRouter } from 'react-router-dom';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const [ theme, setTheme ] = React.useState<DefaultTheme>(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  React.useEffect(() => {
    dispatch(setNotification('Welcome', 'success', 5));
    dispatch(setLanguages());
  }, [ dispatch ]);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <HashRouter basename={'/'}>
        <GlobalStyle />

        <Notifications />
        <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
        <RoutesPages />
        </HashRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default App;
