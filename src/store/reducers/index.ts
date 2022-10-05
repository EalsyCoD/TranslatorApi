import { combineReducers } from "redux";

import * as LanguageReducer from "./LanguageReducer";
import * as TranslateDefaultReducer from "./TranslateDefaultReducer";
import * as TranslateReducer from "./TranslateReducer";
import * as LoaderReducer from "./LoaderReducer";
import * as DetectedReducer from "./DetectedReducer";
import * as FavoritesReducer from "./FavoritesReducer";
import * as NotificationReducer from "./NotificationReducer";

export interface RootState {
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.State;
  [DetectedReducer.FEATURE_KEY]: DetectedReducer.DetectedState;
  [TranslateDefaultReducer.FEATURE_KEY]: TranslateDefaultReducer.DefaultTranslate;
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.Translate;
  [NotificationReducer.FEATURE_KEY]: NotificationReducer.NotificationState;
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.Loader;
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.Favorites;
}

export const reducers = combineReducers<RootState>({
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.reducer,
  [DetectedReducer.FEATURE_KEY]: DetectedReducer.reducer,
  [TranslateDefaultReducer.FEATURE_KEY]: TranslateDefaultReducer.reducer,
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.reducer,
  [NotificationReducer.FEATURE_KEY]: NotificationReducer.reducer,
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.reducer,
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.reducer,
});
