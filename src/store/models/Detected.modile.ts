import { DetectedState } from "../types";

export enum EDetectedActionType {
  DETECTED_SUCCESS = "DETECTED-SUCCESS",
}

export interface IDetectedSuccess {
  type: EDetectedActionType.DETECTED_SUCCESS;
  payload: DetectedState;
}

export type TDetectedType = IDetectedSuccess;
