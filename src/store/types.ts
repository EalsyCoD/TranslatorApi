import { DetectedState } from "src/shared/interfaces/Detected.interface";
import { Favorites } from "src/shared/interfaces/Favorites.interface";
import { Translation } from "src/shared/interfaces/Language.interface";
import { NotificationStateElement } from "src/shared/interfaces/Notification.interface";
import { Translations } from "src/shared/interfaces/Translate.interface";

export type DetectedInitialState = Array<DetectedState> | [];
export type NotificationInitialState = Array<NotificationStateElement> | [];

export interface LoaderInitialState {
  status: boolean;
}

export type TranslateInitialState = [
  {
    detectedLanguage: {
      language: string;
      score: number;
    };
    translations: Array<Translations>;
  }
];

export interface FavoritesInitialState {
  favorites: Array<Favorites>;
}

export type TranslateInitialDefault = [
  {
    translations: Array<Translations>;
  }
];

export interface LanguagesInitialState {
  translation?: Array<Translation>;
  languageFrom: string;
  languageTo: string;
}

export type Translate = [
  {
    Text: string;
  }
];
