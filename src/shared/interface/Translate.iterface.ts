export interface ITranslate {
  detectedLanguage: DetecredLanguage;
  translations: Translation[];
}

export interface DetecredLanguage {
  language: string;
  score: number;
}

export interface Translation {
  text: string;
  to: string;
}
