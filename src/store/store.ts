import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootSaga } from 'saga'

import { reducers } from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
)

export const persistor = persistStore(store)

sagaMiddleWare.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof reducers>

export default store
