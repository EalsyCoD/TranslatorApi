export interface RootState {
  languages: LanguagesState;
}

export interface LanguagesState {
  translation: Array<string>;
}

export interface LanguagesAction {
  type: string;
  payload: LanguagesState;
}
