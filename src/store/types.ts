export interface RootState {
  languages: LanguagesState;
  translate: TranslateState;
  translateDefault: TranslateDefaultWord;
  loader: LoaderState;
}

export interface LoaderState {
  status: boolean;
}

export interface LoaderAction {
  type: string;
  payload: LoaderState;
}

export type DispatchLoaderType = (args: LoaderAction) => LoaderAction;

export type TranslateState = [
  {
    detectedLanguage: {
      language: string;
      score: number;
    };
    translations: [
      {
        text: string;
        to: string;
      }
    ];
  }
];

export type TranslateDefaultWord = [
  {
    translations: [
      {
        text: string;
        to: string;
      }
    ];
  }
];

export interface LanguagesState {
  translation?: Array<string>;
  languageFrom: string;
  languageTo: string;
}

export type Translate = [
  {
    Text: string;
  }
];
