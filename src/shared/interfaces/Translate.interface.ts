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
export interface DetectedState {
  detectedLanguage: {
    language: string;
    score: number;
  };
  language: string;
};

export interface LastTranslatesInitialState {
  from: string;
  to: string;
}

export type Translate = [
  {
    Text: string;
  }
];
