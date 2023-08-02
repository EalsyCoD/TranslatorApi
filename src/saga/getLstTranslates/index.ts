import { put, takeEvery } from 'redux-saga/effects'

import { Cache } from 'shared/namespaces'
import { getLstTranslates } from 'store/ActionsCreators/LastTranslatesAction'
import { TranslateInitialState } from 'store/types'

const token = 'lastTranslatesCacheKey'

export function* workergetLstTranslate() {
  try {
    const dict =
      Cache.getDictItems<TranslateInitialState['lastTranslates']>(token)

    yield put(getLstTranslates(dict))
  } catch {}
}

export function* watchergetLstTranslate() {
  yield takeEvery('GET-TRANSLATES', workergetLstTranslate)
}
