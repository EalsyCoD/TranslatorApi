import { ETranslateActionType } from '../models';
import { TranslateInitialState } from '../types';

export const setTranslateDefault = (newData: TranslateInitialState) =>
  <const>{
    type: ETranslateActionType.TRANSLATE_DEFAULT_WORD,
    payload: newData,
  };

export const setTranslate = () =>
  <const>{
    type: 'SET-TRANSLATE',
  };

// const setTranslateDefault = (
//   translateText: string,
// ): ThunkAction<void, RootState, unknown, TTranslateType> => {
//   return async (dispatch, getState) => {
//     try {
//       const { languageTo } = getState().language;
//       const { language } = getState().translate.itemsDetected?.[0];
//       const params: Translate = [
//         {
//           Text: translateText,
//         },
//       ];
//       dispatch(setLoader());
//       const { data } = await apiPost.post<TranslateInitialState>(
//         `${environment.rapidApi}/translate?${environment.api_Version}&from=${language}&to=${languageTo}`,
//         params,
//       );

//       const newData = {
//         ...getState()[FEATURE_KEY].itemsTranslateDefault,
//         ...data,
//       };
//       dispatch({
//         type: ETranslateActionType.TRANSLATE_DEFAULT_WORD,
//         payload: newData,
//       });
//       dispatch(deleteLoader());
//     } catch (error: unknown) {
//       dispatch(deleteLoader());
//     }
//   };
// };
