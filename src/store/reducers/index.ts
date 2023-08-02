import { combineReducers } from 'redux';

import * as LanguageReducer from './New-Reducers/LanguageReducer';
import * as TranslateReducer from './TranslateReducer';
import * as LoaderReducer from './LoaderReducer';
import * as FavoritesReducer from './New-Reducers/FavoritesReducer';
import * as FormReducer from './New-Reducers/FormReducer';

export interface RootState {
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.LanguageState
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.Translate
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.LoaderState
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.Favorites
  [FormReducer.FEATURE_KEY]: FormReducer.FormState
}

export const reducers = combineReducers<RootState>({
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.reducer,
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.reducer,
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.reducer,
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.reducer,
  [FormReducer.FEATURE_KEY]: FormReducer.reducer,
});
