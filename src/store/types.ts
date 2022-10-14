import {
  DetectedState,
  IFavorites,
  TranslateDefault,
  ITranslation,
  TranslateState,
  LastTranslatesInitialState,
} from 'src/shared/interfaces';

export type TranslateInitialState = {
  itemsTranslateDefault: TranslateDefault[]
  itemsTranslate: TranslateState[]
  itemsDetected: DetectedState[]
  lastTranslates: LastTranslatesInitialState[]
}

export interface LanguagesInitialState {
  translation?: Array<ITranslation>;
  languageFrom?: string;
  languageTo?: string;
  textAreaFrom?: string,
  textAreaTo?: string,
}

export interface LoaderInitialState {
  status: boolean;
}

export interface FavoritesInitialState {
  favorites: Array<IFavorites>;
}
