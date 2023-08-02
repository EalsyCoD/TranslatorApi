import { InferValueTypes } from 'interfaces/ActionCreators';
import { SelectFormState } from 'store/types';
import * as actions from '../../ActionsCreators/SelectAction';

type FormActionsTypes = ReturnType<InferValueTypes<typeof actions>>

export const FEATURE_KEY = 'selectForm';

export type SelectState = SelectFormState

const initialState: SelectState = {
  selectFrom: '',
  selectTo: '',
};

export const reducer = (
  state: SelectState = initialState,
  action: FormActionsTypes,
): SelectState => {
  switch (action.type) {
    case 'SELECT-ACTION-FROM':
      return {
        ...state,
        selectFrom: action.payload,
      };

    case 'SELECT-ACTION-TO':
      return {
        ...state,
        selectTo: action.payload,
      };

    default:
      return state;
  }
};
