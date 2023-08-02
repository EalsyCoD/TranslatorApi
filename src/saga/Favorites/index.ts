import { put, select, takeEvery } from 'redux-saga/effects'
import { IFavorites } from 'shared/interfaces'
import { Cache } from 'shared/namespaces'
import { setFavorites } from 'store/ActionsCreators/FavoritesAction'
import { RootState } from 'store/reducers'

const token = 'favoritesCacheKey'

export function* workerFavoritesTranslate() {
  try {
    const { favorites } = yield select((state: RootState) => state.favorites)
    const { textAreaFrom, textAreaTo } = yield select(
      (state: RootState) => state.language,
    )
    const params: IFavorites = {
      from: textAreaFrom,
      to: textAreaTo,
    }

    const newFavorites: IFavorites[] = [ ...favorites, params ]

    Cache.setValueToStorage(token, newFavorites)

    yield put(setFavorites(newFavorites))
  } catch {}
}

export function* watcherFavoritesTranslate() {
  yield takeEvery('FAVORITES-SAVE', workerFavoritesTranslate)
}
