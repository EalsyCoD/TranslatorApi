import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { useDispatch } from "react-redux";

import { Header } from "./components/Header";
import { Notifications } from "./components/Notification";
import { TranslateArea } from "./features/TranslateArea";

import { setLanguages } from "./store/actions/LanguageAction";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const [theme, setTheme] = React.useState<DefaultTheme>(light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  React.useEffect(() => {
    dispatch(setLanguages());
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Notifications />
        <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
        <TranslateArea />
      </ThemeProvider>
    </React.Fragment>
  );
};
export default App;
