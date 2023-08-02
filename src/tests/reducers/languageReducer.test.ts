import { setLanguages } from 'store/ActionsCreators/LanguageAction'
import * as LanguageReducer from 'store/reducers/New-Reducers/LanguageReducer'

const initialState = {
  translation: [],
  languageFrom: 'Auto Language Select',
  languageTo: 'Auto Language Select',
  textAreaFrom: '',
  textAreaTo: '',
}

const changeState1 = [
  {
    translation: [],
    languageFrom: 'Auto Language Select',
    languageTo: 'Auto Language Select',
    textAreaFrom: '',
    textAreaTo: '',
  },
]

const changeState2 = [
  {
    translation: [],
    languageFrom: 'en',
    languageTo: 'ru',
    textAreaFrom: 'gregre',
    textAreaTo: 'gerg',
  },
]

describe('language-reducer', () => {
  it('set language correctly', () => {
    expect(
      LanguageReducer.reducer(initialState, setLanguages(changeState1)),
    ).toEqual({
      translation: [],
      languageFrom: 'en',
      languageTo: 'ru',
      textAreaFrom: 'Brain',
      textAreaTo: 'Мозг',
    })
  })

  it('set language coorectly 2', () => {
    expect(
      LanguageReducer.reducer(initialState, setLanguages(changeState2)),
    ).toEqual({
      translation: [],
      languageFrom: 'en',
      languageTo: 'ru',
      textAreaFrom: 'gregre',
      textAreaTo: 'gerg',
    })
  })
})
