import {
  DetectedState,
  IFavorites,
  ITranslation,
  LastTranslatesInitialState,
  TranslateDefault,
  TranslateState,
} from 'shared/interfaces'

export type TranslateInitialState = {
  itemsTranslateDefault: TranslateDefault[]
  itemsTranslate: TranslateState[]
  itemsDetected: DetectedState[]
  lastTranslates: LastTranslatesInitialState[]
}

export interface LanguagesInitialState {
  translation?: Array<ITranslation>
  languageFrom: string
  languageTo: string
  textAreaFrom: string
  textAreaTo: string
}

export interface FormTextState {
  detected: string
  translate: string
  translateDefault: string
}

export interface SelectFormState {
  selectFrom: string
  selectTo: string
}

export interface LoaderInitialState {
  status: boolean
}

export interface FavoritesInitialState {
  favorites: Array<IFavorites>
}
