import { put, select, takeEvery } from '@redux-saga/core/effects';
import { IFavorites } from 'shared/interfaces';
import { Cache } from 'shared/namespaces';
import { setLastTranslates } from 'store/ActionsCreators/LastTranslatesAction';
import { RootState } from 'store/store';

const token = 'lastTranslatesCacheKey';

export function* workerLastTranslate() {
  try {
    const { lastTranslates } = yield select(
      (state: RootState) => state.translate.lastTranslates,
    );
    const { textAreaFrom, textAreaTo } = yield select(
      (state: RootState) => state.language,
    );

    const params: IFavorites = {
      from: textAreaFrom,
      to: textAreaTo,
    };

    const newFavorites: IFavorites[] = [ ...lastTranslates, params ];

    Cache.setValueToStorage(token, newFavorites);

    yield put(setLastTranslates(newFavorites));
  } catch {}
}

export function* watcherLastTranslate() {
  yield takeEvery('LAST-TRANSLATES', workerLastTranslate);
}
