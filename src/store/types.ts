export interface RootState {
  languages: LanguagesState;
  translate: TranslateState;
  translateDefault: TranslateDefaultWord;
}

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
