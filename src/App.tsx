import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { RoutesPages } from './pages/routes';

import { Header } from './components';

import { setLanguages } from './store/ActionsCreators/LanguageAction';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { LanguagesInitialState } from './store/types';
import { apiGet } from './api/axios';
import { useAppDispatch } from './hooks/useAppDispatch';

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  const [theme, setTheme] = React.useState<DefaultTheme>(light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  React.useEffect(() => {
    async function getLanguages() {
      const result = await apiGet.get<LanguagesInitialState[]>('/languages')
      dispatch(setLanguages(result.data))
    }
    getLanguages()
  }, [dispatch])
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <GlobalStyle />

          <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
          <RoutesPages />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
export default App;
