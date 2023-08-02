import { LanguagesInitialState } from 'store/types'

import { apiGet } from './axios'

export const getLanguages = async () => {
  const { data } = await apiGet.get<LanguagesInitialState[]>('/languages')
  return data
}
