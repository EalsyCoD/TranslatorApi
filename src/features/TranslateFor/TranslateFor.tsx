import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'src/components/Select/Select';

import {
  setDetected,
  setFavorites,
  setLanguageFilterFrom,
  setLastTranslates,
  setNotification,
  setTranslate,
  setTranslateDefault,
} from 'src/store/actions';

import { RootState } from 'src/store/reducers';

import { IFavorites } from 'src/shared/interfaces';

import favoritesImage from '../../assets/icon/icon-star.svg';

import { Container, StarContainer, TextArea, Image } from './styles';

export const TranslateFor = () => {
  const dispatch = useDispatch();
  const intervalRef = React.useRef<ReturnType<typeof setTimeout>>();

  const translateWordDefault = useSelector(
    (state: RootState) => state.translateDefault,
  );
  const translateWord = useSelector(
    (state: RootState) => state.translate?.[0].translations?.[0].text,
  );

  const [ textAreaFrom, setTextAreaFrom ] = React.useState<string>('');
  console.log(textAreaFrom);
  const { languageFrom, languageTo } = useSelector(
    (state: RootState) => state.language,
  );

  const detectedLanguage = useSelector(
    (state: RootState) => state.detected?.[0].detectedLanguage?.language,
  );
  const detected = useSelector(
    (state: RootState) => state.detected?.[0].language,
  );

  const HandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguageFilterFrom(e.target.value));
  };

  const handleCheckKeyboard = () => {
    dispatch(setNotification('Сhange keyboard layout', 'error', 5));
  };

  const handleTranslateFrom = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaFrom(e.target.value);
    clearTimeout(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      dispatch(setDetected(e.target.value));
      handleTranslate(e);
    }, 1000);
  };

  const handleTranslate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (languageFrom === 'Auto Language Select') {
      dispatch(setTranslate(e.target.value));
      return;
    }
    if (languageFrom === languageTo) {
      dispatch(setNotification('Same languages, choose another or textArea clear', 'error', 5));
      return;
    }
    dispatch(setTranslateDefault(e.target.value));
  };

  const handleFavorites = () => {
    if (textAreaFrom) {
      const send: IFavorites = {
        from: textAreaFrom,
        to: translateWordDefault[0].translations?.[0].text || translateWord,
      };
      dispatch(setNotification('Saved in features', 'success', 5));
      dispatch(setTranslateDefault(''));
      setTextAreaFrom('');
      dispatch(setFavorites(send));
    } else {
      dispatch(setNotification('Nothing to save', 'error', 5));
    }
  };

  React.useEffect(() => {
    if (textAreaFrom.length === 0) {
      return;
    }
    if (translateWordDefault[0].translations?.[0].text.length || translateWord.length) {
      const LastTranslates: IFavorites = {
        from: textAreaFrom,
        to: translateWordDefault[0].translations?.[0].text || translateWord,
      };
      dispatch(setLastTranslates(LastTranslates));
    }
  }, [ translateWordDefault[0].translations?.[0].text, translateWord ]);

  React.useEffect(() => {
    if (languageFrom === 'Auto Language Select') {
      return;
    }
    if (languageFrom !== detected && languageFrom !== detectedLanguage) {
      handleCheckKeyboard();
    }
  }, [ detected ]);

  return (
    <>
      <Container>
        <Select
          onChange={HandleSelect}
          value={languageFrom}
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
          <Image
            onClick={handleFavorites}
            src={favoritesImage}
            alt="favorites"
          />
        </StarContainer>
      </Container>
    </>
  );
};
