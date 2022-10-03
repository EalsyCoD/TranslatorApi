import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    iconSwitch: string;
    colors: {
      backgroundColor: string;
      backgroundColorContent: string;
      primary: string;
      secondary: string;
      text: string;
      textHeader: string;
    };
  }
}
