import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkeletonLoader } from 'src/components';
import Button from 'src/components/Button/Button';
import Select from 'src/components/Select/Select';

import {
  setLanguageFilterTo,
  swapLangauges,
} from 'src/store/actions/LanguageAction';
import { setTranslateDefault } from 'src/store/actions/TranslateDefaultAction';
import { RootState } from 'src/store/reducers';

import { BlockButton, SkeletonContainer, TextArea } from './styles';

export const TranslateTo = () => {
  const dispatch = useDispatch();

  const { languageTo, languageFrom } = useSelector(
    (state: RootState) => state.language,
  );

  const translateWord = useSelector(
    (state: RootState) => state.translateDefault,
  );

  const translateWordDefault = useSelector(
    (state: RootState) => state.translate,
  );

  const handleSwap = () => {
    if (languageFrom && languageTo !== '' && languageFrom !== languageTo) {
      dispatch(swapLangauges());
    }
  };

  const handleClearAreas = () => {
    dispatch(setTranslateDefault(''));
  };

  return (
    <>
      <Select
        onChange={(e) => dispatch(setLanguageFilterTo(e.target.value))}
        value={languageTo}
        name="select"
        optionsValue="Auto Language Select"
        chilldrenOptions={'Auto Language Select'}
      />
      <SkeletonContainer>
        <TextArea
          disabled={true}
          value={
            translateWordDefault[0].translations[0].text
              ? translateWordDefault[0].translations[0].text
              : translateWord[0].translations[0].text
          }
        ></TextArea>
        <SkeletonLoader />
      </SkeletonContainer>
      <Button textButton="Switch" type="submit" onClick={handleSwap} />
      <BlockButton>
        <Link to="/favorites">
          <Button onClick={handleClearAreas} textButton="Go to Favorites" />
        </Link>
      </BlockButton>
    </>
  );
};
