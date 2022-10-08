import { DETECTED_STATE_PLACEHOLDER } from 'src/shared/constants/placeholders';

import { EDetectedActionType, TDetectedType } from '../models';

import { DetectedInitialState } from '../types';

export const FEATURE_KEY = 'detected';

export type DetectedState = DetectedInitialState;

const initialState: DetectedState = DETECTED_STATE_PLACEHOLDER;

export const reducer = (
  state: DetectedInitialState = initialState,
  action: TDetectedType,
): DetectedInitialState => {
  switch (action.type) {
    case EDetectedActionType.DETECTED_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
