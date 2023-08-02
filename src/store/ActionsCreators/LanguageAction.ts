import { ELanguageActionType } from '../models'
import { LanguagesInitialState } from '../types'

export const setLanguages = (data: LanguagesInitialState[]) =>
  <const>{
    type: ELanguageActionType.ALL_LANGUAGES,
    payload: data,
  }

export const setLanguageFilterFrom = (languageFrom: string) =>
  <const>{
    type: ELanguageActionType.SET_LANGUAGE_FILTER_FROM,
    payload: {
      languageFrom,
      languageTo: '',
    },
  }

export const setLanguageFilterTo = (languageTo: string, languageFrom: string) =>
  <const>{
    type: ELanguageActionType.SET_LANGUAGE_FILTER_TO,
    payload: {
      languageTo,
      languageFrom,
    },
  }

export const setLanguageFilterToChangeFrom = () =>
  <const>{
    type: 'SET-LANGUAGE-CHANGE',
  }

export const setLanguageFilterToChangeTo = () =>
  <const>{
    type: 'SET-LANGUAGE-CHANGE-TO',
  }

export const setTextAreaFromState = (textAreaFrom: string) =>
  <const>{
    type: ELanguageActionType.SET_TEXT_AREA_FROM,
    payload: {
      textAreaFrom,
    },
  }

export const setTextAreaToState = (textAreaTo: string) =>
  <const>{
    type: ELanguageActionType.SET_TEXT_AREA_TO,
    payload: {
      textAreaTo,
    },
  }

export const swapLangauges = (
  languageTo: string,
  languageFrom: string,
  textAreaFrom: string,
  textAreaTo: string,
) =>
  <const>{
    type: ELanguageActionType.SWAP_LANGUAGE,
    payload: {
      languageTo: languageFrom,
      languageFrom: languageTo,
      textAreaFrom: textAreaTo,
      textAreaTo: textAreaFrom,
    },
  }
