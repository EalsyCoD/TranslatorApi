import { IFavorites, LastTranslatesInitialState } from 'shared/interfaces';
import { ETranslateActionType } from '../models';

export const setLastTranslates = (newFavorites: IFavorites[]) =>
  <const>{
    type: ETranslateActionType.SET_TRANSLATES_SUCCESS,
    payload: newFavorites,
  };

export const LstTranslatesAction = () =>
  <const>{
    type: 'LAST-TRANSLATES',
  };

export const getLatestTranslates = () =>
  <const>{
    type: 'GET-TRANSLATES',
  };

export const getLstTranslates = (dict: LastTranslatesInitialState[]) =>
  <const>{
    type: ETranslateActionType.GET_TRANSLATES,
    payload: dict,
  };

//   const getLatestTranslates = (): ThunkAction<
//   void,
//   RootState,
//   unknown,
//   TTranslateType
// > => {

//   const dict =
//     Cache.getDictItems<TranslateInitialState['lastTranslates']>(token);

//   return async (dispatch) => {
//     dispatch({
//       type: ETranslateActionType.GET_TRANSLATES,
//       payload: dict,
//     });
//   };
// };
