export type Translations = {
  text: string;
  to: string;
};

export type TranslateDefault = {
  translations: Array<Translations>;
};

export type TranslateState = {
  detectedLanguage: {
    language: string;
    score: number;
  };
  translations: Array<Translations>;
};

export type Translate = [
  {
    Text: string;
  }
];
