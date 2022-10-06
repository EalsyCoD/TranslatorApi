import {
  DetectedState,
  Favorites,
  NotificationStateElement,
  TranslateDefault,
  TranslateState,
  Translation,
} from 'src/shared/interfaces';

export type DetectedInitialState = Array<DetectedState> | [];
export type NotificationInitialState = Array<NotificationStateElement> | [];
export type TranslateDefaultInitialState = Array<TranslateDefault> | [];
export type TranslateInitialState = Array<TranslateState> | [];

export interface LoaderInitialState {
  status: boolean;
}

export interface FavoritesInitialState {
  favorites: Array<Favorites>;
}

export interface LastTranslatesInitialState {
  lastTranslates: Array<Favorites>;
}

export interface LanguagesInitialState {
  translation?: Array<Translation>;
  languageFrom: string;
  languageTo: string;
  textAreaFrom: string;
  textAreaTo: string;
}

export type Translate = [
  {
    Text: string;
  }
];
