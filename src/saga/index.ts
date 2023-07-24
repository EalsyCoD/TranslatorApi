import { all } from 'redux-saga/effects';
import { watcherFavoritesTranslate } from './Favorites';
import { watcherDictFavorites } from './FavoritesDict';
import { watcherLastTranslate } from './LastTranslates.ts';
import { watcherDefaultTranslate } from './TranslateDefault';

export function * rootSaga() {
  yield all([
    watcherDefaultTranslate(),
    watcherLastTranslate(),
    // watchergetLstTranslate(),
    watcherDictFavorites(),
    watcherFavoritesTranslate(),
  ]);
};
