import {
  DetectedInitialState,
  TranslateDefaultInitialState,
  TranslateInitialState,
} from 'src/store/types';

export const textTo = {
  text: '',
  to: '',
};
export const detecredLanguage = {
  language: '',
  score: 0,
};

export const translations = [ textTo ];

export const DETECTED_STATE_PLACEHOLDER: DetectedInitialState = [
  {
    detectedLanguage: detecredLanguage,
    language: '',
  },
];

export const TRANSLATEDEFAULT_STATE_PLACEHLODER: TranslateDefaultInitialState =
  [
    {
      translations: translations,
    },
  ];

export const TRANSLATE_STATE_PLACEHOLDER: TranslateInitialState = [
  {
    detectedLanguage: detecredLanguage,
    translations: translations,
  },
];
