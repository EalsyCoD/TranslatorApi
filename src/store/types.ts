import {
  DetectedState,
  IFavorites,
  NotificationStateElement,
  TranslateDefault,
  TranslateState,
  ITranslation,
} from 'src/shared/interfaces';

export type DetectedInitialState = Array<DetectedState> | [];
export type NotificationInitialState = Array<NotificationStateElement> | [];
export type TranslateDefaultInitialState = Array<TranslateDefault> | [];
export type TranslateInitialState = Array<TranslateState> | [];

export interface LoaderInitialState {
  status: boolean;
}

export interface FavoritesInitialState {
  favorites: Array<IFavorites>;
}

export interface LastTranslatesInitialState {
  lastTranslates: Array<IFavorites>;
}

export interface LanguagesInitialState {
  translation?: Array<ITranslation>;
  languageFrom: string;
  languageTo: string;
}
