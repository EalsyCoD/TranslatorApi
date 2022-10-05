import { TranslateInitialState } from "src/store/types";

export const TRANSLATE_STATE_PLACEHOLDER: TranslateInitialState = [
  {
    detectedLanguage: {
      language: "",
      score: 0,
    },
    translations: [
      {
        text: "",
        to: "",
      },
    ],
  },
];
