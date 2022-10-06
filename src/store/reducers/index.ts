import { combineReducers } from 'redux';

import * as LanguageReducer from './LanguageReducer';
import * as TranslateDefaultReducer from './TranslateDefaultReducer';
import * as TranslateReducer from './TranslateReducer';
import * as LoaderReducer from './LoaderReducer';
import * as DetectedReducer from './DetectedReducer';
import * as FavoritesReducer from './FavoritesReducer';
import * as NotificationReducer from './NotificationReducer';
import * as LastTranslatesReducer from './LastTranslatesReducer';

export interface RootState {
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.LanguageState;
  [DetectedReducer.FEATURE_KEY]: DetectedReducer.DetectedState;
  [TranslateDefaultReducer.FEATURE_KEY]: TranslateDefaultReducer.DefaultTranslate;
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.Translate;
  [NotificationReducer.FEATURE_KEY]: NotificationReducer.NotificationState;
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.LoaderState;
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.Favorites;
  [LastTranslatesReducer.FEATURE_KEY]: LastTranslatesReducer.LastTranslates;
}

export const reducers = combineReducers<RootState>({
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.reducer,
  [DetectedReducer.FEATURE_KEY]: DetectedReducer.reducer,
  [TranslateDefaultReducer.FEATURE_KEY]: TranslateDefaultReducer.reducer,
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.reducer,
  [NotificationReducer.FEATURE_KEY]: NotificationReducer.reducer,
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.reducer,
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.reducer,
  [LastTranslatesReducer.FEATURE_KEY]: LastTranslatesReducer.reducer,
});
