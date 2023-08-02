import { TRANSLATE_STATE_PLACEHOLDER } from 'shared/constants/placeholders'

import { ETranslateActionType, TTranslateType } from '../models'

import { TranslateInitialState } from '../types'

export const FEATURE_KEY = 'translate'

export type Translate = TranslateInitialState

const initialState: TranslateInitialState = TRANSLATE_STATE_PLACEHOLDER

export const reducer = (
  state: Translate = initialState,
  action: TTranslateType,
): Translate => {
  switch (action.type) {
    case ETranslateActionType.TRANSLATE_WORD:
      return {
        ...state,
        itemsTranslate: action.payload,
      }
    case ETranslateActionType.TRANSLATE_DEFAULT_WORD:
      return {
        ...state,
        itemsTranslateDefault: action.payload,
      }
    case ETranslateActionType.DETECTED_SUCCESS:
      return {
        ...state,
        itemsDetected: action.payload,
      }
    case ETranslateActionType.SET_TRANSLATES_SUCCESS:
      return {
        ...state,
        lastTranslates: action.payload,
      }
    case ETranslateActionType.GET_TRANSLATES:
      return {
        ...state,
        lastTranslates: action.payload,
      }
    default:
      return state
  }
}
