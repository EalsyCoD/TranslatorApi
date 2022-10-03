import React from "react";

import { Header } from "./components/Header";

import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { TranslateArea } from "./components/TranslateArea";

const App = (): JSX.Element => {
  const [theme, setTheme] = React.useState<DefaultTheme>(light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header toggleTheme={toggleTheme} titleTheme={theme.title} />
        <TranslateArea />
      </ThemeProvider>
    </React.Fragment>
  );
};
export default App;
