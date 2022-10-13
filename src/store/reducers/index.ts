import { combineReducers } from 'redux';

import * as LanguageReducer from './LanguageReducer';
import * as TranslateReducer from './TranslateReducer';
import * as LoaderReducer from './LoaderReducer';
import * as FavoritesReducer from './FavoritesReducer';

export interface RootState {
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.LanguageState;
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.Translate;
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.LoaderState;
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.Favorites;
}

export const reducers = combineReducers<RootState>({
  [LanguageReducer.FEATURE_KEY]: LanguageReducer.reducer,
  [TranslateReducer.FEATURE_KEY]: TranslateReducer.reducer,
  [LoaderReducer.FEATURE_KEY]: LoaderReducer.reducer,
  [FavoritesReducer.FEATURE_KEY]: FavoritesReducer.reducer,
});
