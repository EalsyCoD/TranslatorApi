import React from 'react'
import { toast } from 'react-toastify'

import Select from 'components/Select/Select'

import { setTextAreaFromState } from 'store/ActionsCreators/LanguageAction'

import { RootState } from 'store/reducers'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import * as FormAction from 'store/ActionsCreators/FormAction'
import * as LanguageAction from 'store/ActionsCreators/LanguageAction'
import { setTranslate } from 'store/ActionsCreators/TranslateDefaultAction'
import { LstTranslatesAction } from 'store/ActionsCreators/LastTranslatesAction'
import { setFavoritesSave } from 'store/ActionsCreators/FavoritesAction'
import { Container, StarContainer, TextArea, Image } from './styles'
import favoritesImage from '../../assets/icon/icon-star.svg'

export function TranslateFor() {
  const dispatch = useAppDispatch()
  const intervalRef = React.useRef<ReturnType<typeof setTimeout>>()

  const translateWordDefault = useAppSelector(
    (state: RootState) => state.translate.itemsTranslateDefault,
  )
  const translateWord = useAppSelector(
    (state: RootState) =>
      state.translate.itemsTranslate?.[0].translations?.[0].text,
  )

  const textAreaFrom = useAppSelector(
    (state: RootState) => state.language.textAreaFrom,
  )

  const { languageFrom, languageTo } = useAppSelector(
    (state: RootState) => state.language,
  )

  const detectedLanguage = useAppSelector(
    (state: RootState) =>
      state.translate.itemsDetected?.[0].detectedLanguage?.language,
  )
  const detected = useAppSelector(
    (state: RootState) => state.translate.itemsDetected?.[0].language,
  )

  const HandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(LanguageAction.setLanguageFilterFrom(e.target.value))
    // dispatch(LanguageAction.setLanguageFilterToChangeFrom());
  }

  const handleCheckKeyboard = () => {
    toast.error('Сhange keyboard layout')
  }

  const handleTranslateFrom = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setTextAreaFromState(e.target.value))
    clearTimeout(intervalRef.current)
    intervalRef.current = setTimeout(() => {
      dispatch(FormAction.FormActionDetected(e.target.value))
      dispatch(setTranslate())
      dispatch(setTextAreaFromState(e.target.value))
      handleTranslate(e)
    }, 1000)
  }

  const handleTranslate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (languageFrom === 'Auto Language Select') {
      dispatch(FormAction.FormActionTranslate(e.target.value))
      dispatch(setTranslate())
      // dispatch(setTranslate(e.target.value));
      return
    }
    if (languageFrom === languageTo) {
      toast.error('Same languages, choose another or textArea clear')
      return
    }
    dispatch(FormAction.FormActionTranslateDefault(e.target.value))
    dispatch(setTranslate())
    // dispatch(setTranslateDefault(e.target.value));
  }

  const handleFavorites = () => {
    if (textAreaFrom) {
      dispatch(setFavoritesSave())
      toast.success('Saved in features')
      dispatch(FormAction.FormActionTranslateDefault(''))
      dispatch(setTranslate())
      // dispatch(setTranslateDefault(''));
      dispatch(setTextAreaFromState(''))
      // dispatch(setFavorites(send));
    } else {
      toast.error('Nothing to save')
    }
  }

  React.useEffect(() => {
    if (textAreaFrom?.length === 0) {
      return
    }
    if (
      translateWordDefault?.[0].translations?.[0].text.length ||
      translateWord.length
    ) {
      dispatch(LstTranslatesAction())
    }
  }, [dispatch, textAreaFrom?.length, translateWord, translateWordDefault])

  React.useEffect(() => {
    if (languageFrom === 'Auto Language Select') {
      return
    }
    if (languageFrom !== detected && languageFrom !== detectedLanguage) {
      handleCheckKeyboard()
    }
  }, [detected, detectedLanguage, languageFrom])

  return (
    <Container>
      <Select
        onChange={HandleSelect}
        value={languageFrom}
        name="select"
        optionsValue="Auto Language Select"
        chilldrenOptions="Auto Language Select"
      />
      <StarContainer>
        <TextArea
          id="from"
          value={textAreaFrom}
          onChange={handleTranslateFrom}
        />
        <Image onClick={handleFavorites} src={favoritesImage} alt="favorites" />
      </StarContainer>
    </Container>
  )
}
