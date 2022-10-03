import { TranslateState } from "../types";

export enum ETranslateActionType {
  TRANSLATE_WORD = "TRANSLATE-WORD",
}

export interface ITranslateSucess {
  type: ETranslateActionType.TRANSLATE_WORD;
  payload: TranslateState;
}

export type TTranslateType = ITranslateSucess;
