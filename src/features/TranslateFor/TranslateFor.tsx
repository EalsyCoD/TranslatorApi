/* eslint-disable no-undef */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'src/components/Select/Select';

import { setDetected } from 'src/store/actions/DetectedAction';
import { setFavorites } from 'src/store/actions/FavoritesAction';
import { setLanguageFilterFrom } from 'src/store/actions/LanguageAction';
import { setLastTranslates } from 'src/store/actions/LastTranslatesAction';
import { setNotification } from 'src/store/actions/NotificationAction';
import { setTranslate } from 'src/store/actions/TranslateAction';
import { setTranslateDefault } from 'src/store/actions/TranslateDefaultAction';
import { RootState } from 'src/store/reducers';

import favorites from '../../assets/icon/icon-star.svg';

import { Container, StarContainer, TextArea, Image } from './styles';

export const TranslateFor = () => {
  const dispatch = useDispatch();
  const intervalRef = React.useRef<NodeJS.Timeout>();

  const [ textAreaFrom, setTextAreaFrom ] = React.useState<string>('');

  const { languageFrom } = useSelector(
    (state: RootState) => state.language,
  );

  const translateWordDefault = useSelector(
    (state: RootState) => state.translate,
  );

  const translateWord = useSelector(
    (state: RootState) => state.translateDefault,
  );
  const lastFavorites = {
    lastTranslates: [
      {
        from: textAreaFrom,
        to: translateWord[0].translations?.[0].text,
      },
    ],
  };
  const detectedWord = useSelector((state: RootState) => state.translate);

  const HandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguageFilterFrom(e.target.value));
  };

  const handleCheckKeyboard = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      if (languageFrom !== detectedWord?.[0].detectedLanguage.language) {
        dispatch(setNotification('Сhange keyboard layout', 'error', 5));
      }
    }, 3000);
  };

  const handleTranslate = () => {
    if (languageFrom === 'Auto Language Select') {
      dispatch(setTranslate(textAreaFrom));
      return;
    }
    dispatch(setTranslateDefault(textAreaFrom));
  };

  const handleTranslateFrom = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaFrom(e.target.value);
    clearTimeout(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      handleTranslate();
      dispatch(setDetected(textAreaFrom));
      handleCheckKeyboard();
    }, 1000);
  };

  React.useEffect(() => {
    if (textAreaFrom.length >= 5) {
      dispatch(setLastTranslates(lastFavorites));
    }
  }, [ translateWord[0].translations?.[0].text ]);

  const handleFavorites = () => {
    if (textAreaFrom) {
      const send = {
        favorites: [
          {
            from: textAreaFrom,
            to: translateWord[0].translations?.[0].text,
          },
        ],
      };
      dispatch(setFavorites(send));
    }
  };

  return (
    <>
      <Container>
        <Select
          onChange={HandleSelect}
          value={languageFrom || detectedWord[0].detectedLanguage.language}
          name="select"
          optionsValue="Auto Language Select"
          chilldrenOptions={'Auto Language Select'}
        />
        <StarContainer>
          <TextArea
            id="from"
            value={textAreaFrom}
            onChange={handleTranslateFrom}
          ></TextArea>
          <Image onClick={handleFavorites} src={favorites} alt="favorites" />
        </StarContainer>
      </Container>
    </>
  );
};
