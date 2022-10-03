import { ITranslate } from "src/shared/interface/Translate.iterface";

export interface RootState {
  languages: LanguagesState;
  translate: TranslateState;
}

export interface TranslateState {
  translate: ITranslate[];
}

export interface TranslateAction {
  type: string;
  payload: TranslateState;
}

export interface LanguagesState {
  translation?: Array<string>;
  languageFrom: string;
  languageTo: string;
}
