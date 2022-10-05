export type DetectedInitialState = Array<DetectedState> | [];

export type DetectedState = {
  language: string;
};

export type NotificationAction = {
  type: string;
  payload: NotificationStateElement;
};
export type NotificationStatus = "error" | "hello";
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
    translations: Array<Translations>;
  }
];

export interface FavoritesState {
  favorites: Array<Favorites>;
}

export type Favorites = {
  from: string;
  to: string;
  token?: string;
};

export type TranslateDefault = [
  {
    translations: Array<Translations>;
  }
];

export type Translations = {
  text: string;
  to: string;
};

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
