import { call, put, select, takeEvery } from '@redux-saga/core/effects'

import { setTranslateDefaultApi } from 'api/setTranslateDefault'
import { setTranslateDefault } from 'store/ActionsCreators/TranslateDefaultAction'
import { RootState } from 'store/store'
import { TranslateInitialState } from 'store/types'

export function* workerDefaultTranslate() {
  try {
    const { itemsTranslateDefault } = yield select(
      (state: RootState) => state.translate.itemsTranslateDefault,
    )
    const { languageFrom, languageTo } = yield select(
      (state: RootState) => state.language,
    )
    const { detected } = yield select((state: RootState) => state.formtext)
    const data: TranslateInitialState = yield call(setTranslateDefaultApi, {
      languageFrom,
      languageTo,
      detected,
    })

    const newData = {
      ...itemsTranslateDefault,
      ...data,
    }

    yield put(setTranslateDefault(newData))
  } catch {}
}

export function* watcherDefaultTranslate() {
  yield takeEvery('SET-TRANSLATE', workerDefaultTranslate)
}
