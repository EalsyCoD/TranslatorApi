import { put, takeEvery } from 'redux-saga/effects'

import { Cache } from 'shared/namespaces'
import { getFavorites } from 'store/ActionsCreators/FavoritesAction'
import { FavoritesInitialState } from 'store/types'

export const token = 'favoritesCacheKey'

export function* workerDictFavorites() {
  try {
    const dict = Cache.getDictItems<FavoritesInitialState['favorites']>(token)
    yield put(getFavorites(dict))
  } catch {}
}

export function* watcherDictFavorites() {
  yield takeEvery('FAVORITES-SAVE-GET', workerDictFavorites)
}
