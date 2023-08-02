import { ThunkAction } from 'redux-thunk'
import { DispatchLoaderType } from 'shared/interfaces/Loader.interface'

import { ELoaderActionType, TLoaderType } from '../models'

import { RootState } from '../reducers'

const setLoader =
  (): ThunkAction<void, RootState, unknown, TLoaderType> =>
  async (dispatch: DispatchLoaderType) => {
    dispatch({
      type: ELoaderActionType.NEW_LOADER,
      payload: {
        status: true,
      },
    })
  }

const deleteLoader =
  (): ThunkAction<void, RootState, unknown, TLoaderType> =>
  async (dispatch: DispatchLoaderType) => {
    dispatch({
      type: ELoaderActionType.CLEAR_LOADER,
      payload: {
        status: false,
      },
    })
  }

export { setLoader, deleteLoader }
