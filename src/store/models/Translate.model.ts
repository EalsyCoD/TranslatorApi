import { TranslateInitialState } from '../types';

export enum ETranslateActionType {
  TRANSLATE_WORD = 'TRANSLATE-WORD',
}

export interface ITranslateSucess {
  type: ETranslateActionType.TRANSLATE_WORD;
  payload: TranslateInitialState;
}

export type TTranslateType = ITranslateSucess;
