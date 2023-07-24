import {
  TranslateInitialState,
} from 'store/types';
import { IFavorites, TranslateDefault, TranslateState, Translations } from '../interfaces';

export const textTo: Translations = {
  text: '',
  to: '',
};
export const fromTo: IFavorites = {
  from: '',
  to: '',
};

export const detectedLanguage = {
  language: 'Auto Language Select',
  score: 0,
};

export const lastTranslates = [ fromTo ];
export const translations = [ textTo ];

export const DETECTED_STATE_PLACEHOLDER = [
  {
    detectedLanguage: detectedLanguage,
    language: '',
  },
];

export const TRANSLATE_DEFAULT: TranslateDefault[] = [
  {
    translations: translations,
  },
];
export const TRANSLATE_STATE: TranslateState[] = [
  {
    detectedLanguage: detectedLanguage,
    translations: translations,
  },
];

export const LASTTRANSLATES_STATE = [
  {
    from: '',
    to: '',
  },
];

export const TRANSLATE_STATE_PLACEHOLDER: TranslateInitialState =
  {
    itemsTranslate: TRANSLATE_STATE,
    itemsTranslateDefault: TRANSLATE_DEFAULT,
    itemsDetected: DETECTED_STATE_PLACEHOLDER,
    lastTranslates: LASTTRANSLATES_STATE,
  };
