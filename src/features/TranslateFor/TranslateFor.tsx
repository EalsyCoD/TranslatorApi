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
import { FavoritesInitialState } from 'src/store/types';

import favoritesImage from '../../assets/icon/icon-star.svg';

import { Container, StarContainer, TextArea, Image } from './styles';

export const TranslateFor = () => {
  const dispatch = useDispatch();
  const intervalRef = React.useRef<NodeJS.Timeout>();

  const [ textAreaFrom, setTextAreaFrom ] = React.useState<string>('');

  const { languageFrom } = useSelector(
    (state: RootState) => state.language,
  );

  const detected = useSelector(
    (state: RootState) => state.detected[0].language,
  );
  const translateWord = useSelector(
    (state: RootState) => state.translateDefault,
  );

  const lastTranslates = {
    from: textAreaFrom,
    to: translateWord[0].translations?.[0].text,
  };

  const favorites = {
    from: textAreaFrom,
    to: translateWord[0].translations?.[0].text,
  };
  const HandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguageFilterFrom(e.target.value));
  };

  const handleCheckKeyboard = () => {
    dispatch(setNotification('Сhange keyboard layout', 'error', 5));
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
    }, 1000);
  };

  React.useEffect(() => {
    if (translateWord[0].translations?.[0].text.length !== 0) {
      const LastTranslates = {
        lastTranslates: [ lastTranslates ],
      };
      dispatch(setLastTranslates(LastTranslates));
    }
  }, [ translateWord[0].translations?.[0].text ]);

  React.useEffect(() => {
    if (languageFrom !== detected) {
      handleCheckKeyboard();
    }
  }, [ detected ]);

  const handleFavorites = () => {
    if (textAreaFrom) {
      const send: FavoritesInitialState =
        {
          favorites: [ favorites ],
        };
      dispatch(setFavorites(send));
    }
  };

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
          <Image onClick={handleFavorites} src={favoritesImage} alt="favorites" />
        </StarContainer>
      </Container>
    </>
  );
};
