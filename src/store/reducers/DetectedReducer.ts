import { EDetectedActionType, TDetectedType } from "../models/Detected.modile";

import { DetectedState } from "../types";

const initialState: DetectedState = [
  {
    language: "",
    score: 0,
    isTranslationSupported: true,
    isTransliterationSupported: true,
  },
];

export const DetectedReducer = (
  state: DetectedState = initialState,
  action: TDetectedType
): DetectedState => {
  switch (action.type) {
    case EDetectedActionType.DETECTED_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
