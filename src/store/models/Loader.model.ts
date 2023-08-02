import { LoaderState } from '../reducers/LoaderReducer'

export enum ELoaderActionType {
  NEW_LOADER = 'NEW-LOADER',

  CLEAR_LOADER = 'CLEAR-LOADER',
}

export interface ILoaderAdd {
  type: ELoaderActionType.NEW_LOADER
  payload: LoaderState
}
export interface ILoaderClear {
  type: ELoaderActionType.CLEAR_LOADER
  payload: LoaderState
}

export type TLoaderType = ILoaderAdd | ILoaderClear
