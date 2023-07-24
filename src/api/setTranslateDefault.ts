import { environment } from 'environments/environment';
import { TranslateInitialState } from 'store/types';
import { apiPost } from './axios';

export type ITranslateDefault = {
  languageFrom: string | undefined;
  languageTo: string | undefined;
  detected: string;
};

export const setTranslateDefaultApi = async ({ languageFrom, languageTo, detected }: ITranslateDefault) => {
  const params = [
    {
      Text: detected,
    },
  ];

  const { data } = await apiPost.post<TranslateInitialState>(
  `${environment.rapidApi}/translate?${environment.api_Version}&from=${languageFrom}&to=${languageTo}`,
  params,
  );

  return data;
};
