import { InferValueTypes } from 'interfaces/ActionCreators';
import { FormTextState } from 'store/types';
import * as actions from '../../ActionsCreators/FormAction';

type FormActionsTypes = ReturnType<InferValueTypes<typeof actions>>

export const FEATURE_KEY = 'formtext';

export type FormState = FormTextState;

const initialState: FormState = {
  translate: '',
  translateDefault: '',
  detected: '',
};

export const reducer = (
  state: FormState = initialState,
  action: FormActionsTypes,
): FormState => {
  switch (action.type) {
    case 'FORM-TEXT-DETECTED':
      return {
        ...state,
        detected: action.payload,
      };

    case 'FORM-TEXT-TRANSLATE':
      return {
        ...state,
        translate: action.payload,
      };

    case 'FORM-TEXT-DEFAULT':
      return {
        ...state,
        translateDefault: action.payload,
      };

    default:
      return state;
  }
};
