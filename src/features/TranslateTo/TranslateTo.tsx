import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkeletonLoader } from 'src/components';
import Button from 'src/components/Button/Button';
import Select from 'src/components/Select/Select';

import {
  setLanguageFilterFrom,
  setLanguageFilterTo,
  swapLangauges,
} from 'src/store/actions/LanguageAction';
import { setTranslate } from 'src/store/actions';
import { setTranslateDefault } from 'src/store/actions/TranslateDefaultAction';

import { RootState } from 'src/store/reducers';

import { BlockButton, BlockLink, SkeletonContainer, TextArea } from './styles';

export const TranslateTo = () => {
  const dispatch = useDispatch();

  const { languageTo, languageFrom } = useSelector(
    (state: RootState) => state.language,
  );

  const translateWord = useSelector(
    (state: RootState) => state.translate?.itemsTranslate?.[0].translations?.[0].text,
  );

  const translateWordDefault = useSelector(
    (state: RootState) => state.translate.itemsTranslateDefault?.[0].translations?.[0].text,
  );

  const detected = useSelector(
    (state: RootState) => state.translate.itemsDetected?.[0].language,
  );

  const handleSwap = () => {
    if (languageFrom && languageTo !== '' && languageFrom !== languageTo && languageTo !== 'Auto Language Select') {
      dispatch(swapLangauges());
    }
  };

  const handleClearAreas = () => {
    if (languageFrom === languageTo) {
      return;
    } if (languageFrom !== 'Auto Language Select') {
      dispatch(setTranslateDefault(''));
      dispatch(setLanguageFilterFrom(detected));
    } if (languageFrom === 'Auto Language Select' && languageTo !== 'Auto Language Select') {
      dispatch(setTranslate(''));
      dispatch(setLanguageFilterFrom(detected));
    }
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
            translateWordDefault || translateWord
          }
        ></TextArea>
        <SkeletonLoader />
      </SkeletonContainer>
      <BlockButton>
      <Button textButton="Switch" type="submit" onClick={handleSwap} />
      <BlockLink>
        <Link to="/favorites">
          <Button onClick={handleClearAreas} textButton="Go to Favorites" />
        </Link>
        </BlockLink>
      </BlockButton>
    </>
  );
};
