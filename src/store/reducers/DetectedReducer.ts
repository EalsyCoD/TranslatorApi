import { EDetectedActionType, TDetectedType } from "../models/Detected.modile";

import { DetectedInitialState } from "../types";

export const FEATURE_KEY = "detected";

export type DetectedState = DetectedInitialState;

const initialState: DetectedState = [];

export const reducer = (
  state: DetectedInitialState = initialState,
  action: TDetectedType
): DetectedInitialState => {
  switch (action.type) {
    case EDetectedActionType.DETECTED_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
