import { FavoritesState } from "./reducers/FavoritesReducer";

export interface RootState {
  languages: LanguagesState;
  translate: TranslateState;
  translateDefault: TranslateDefaultWord;
  loader: LoaderState;
  notification: NotificationInitialState;
  detected: DetectedState;
  favorites: FavoritesState;
}

export type DetectedState = [
  {
    language: string;
    score: number;
    isTranslationSupported: boolean;
    isTransliterationSupported: boolean;
  }
];

export type NotificationAction = {
  type: string;
  payload: NotificationStateElement;
};
export type NotificationStatus = "error";
export type NotificationStateElement = {
  id: string;
  message: string;
  status: NotificationStatus;
};
export type NotificationInitialState = Array<NotificationStateElement> | [];
export type DispatchNotificationType = (
  args: NotificationAction
) => NotificationAction;

export interface LoaderState {
  status: boolean;
}

export interface LoaderAction {
  type: string;
  payload: LoaderState;
}

export type DispatchLoaderType = (args: LoaderAction) => LoaderAction;

export type TranslateState = [
  {
    detectedLanguage: {
      language: string;
      score: number;
    };
    translations: [
      {
        text: string;
        to: string;
      }
    ];
  }
];

export type TranslateDefaultWord = [
  {
    translations: [
      {
        text: string;
        to: string;
      }
    ];
  }
];

export interface LanguagesState {
  translation?: Array<Translation>;
  languageFrom: string;
  languageTo: string;
}

export interface Translation {
  name: string;
  nativeName: string;
  dir: string;
}

export type Translate = [
  {
    Text: string;
  }
];
