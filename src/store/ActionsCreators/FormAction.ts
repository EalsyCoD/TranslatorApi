export const FormActionDetected = (text: string) =>
  <const>{
    type: 'FORM-TEXT-DETECTED',
    payload: text,
  }

export const FormActionTranslate = (text: string) =>
  <const>{
    type: 'FORM-TEXT-TRANSLATE',
    payload: text,
  }

export const FormActionTranslateDefault = (text: string) =>
  <const>{
    type: 'FORM-TEXT-DEFAULT',
    payload: text,
  }
