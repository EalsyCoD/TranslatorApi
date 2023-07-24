import React from 'react';
import { Link } from 'react-router-dom';

import { SkeletonLoader } from 'components';
import Button from 'components/Button/Button';
import Select from 'components/Select/Select';

import { RootState } from 'store/reducers';

import { BlockButton, BlockLink, SkeletonContainer, TextArea } from './styles';
import { useAppDispatch } from 'hooks/useAppDispatch';
import * as LanguageAction from 'store/ActionsCreators/LanguageAction';
import { useAppSelector } from 'hooks/useAppSelector';
import { setTranslate } from 'store/ActionsCreators/TranslateDefaultAction';

export const TranslateTo = () => {
  const dispatch = useAppDispatch();

  const { languageTo, languageFrom, textAreaFrom, textAreaTo } = useAppSelector(
    (state) => state.language,
  );

  const translateWord = useAppSelector(
    (state: RootState) => state.translate?.itemsTranslate?.[0].translations?.[0].text,
  );

  const translateWordDefault = useAppSelector(
    (state: RootState) => state.translate.itemsTranslateDefault?.[0].translations?.[0].text,
  );

  const detected = useAppSelector(
    (state: RootState) => state.translate.itemsDetected?.[0].language,
  );

  const handleSwap = () => {
    if (languageFrom && languageTo !== '' && languageFrom !== languageTo && languageTo !== 'Auto Language Select') {
      dispatch(LanguageAction.swapLangauges(languageTo, languageFrom, textAreaFrom, textAreaTo));
    }
  };

  const handleClearAreas = () => {
    if (languageFrom === languageTo) {
      return;
    } if (languageFrom !== 'Auto Language Select') {
      dispatch(setTranslate());
      dispatch(LanguageAction.setLanguageFilterFrom(detected));
    } if (languageFrom === 'Auto Language Select' && languageTo !== 'Auto Language Select') {
      dispatch(setTranslate());
      dispatch(LanguageAction.setLanguageFilterFrom(detected));
    }
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(LanguageAction.setLanguageFilterTo(e.target.value, languageFrom));
  };

  React.useEffect(() => {
    dispatch(LanguageAction.setTextAreaToState(translateWord || translateWordDefault));
  }, [ translateWord, translateWordDefault ]);

  return (
    <>
      <Select
        // onChange={(e) => dispatch(setLanguageFilterTo(e.target.value))}
        onChange={selectChange}
        value={languageTo}
        name="select"
        optionsValue="Auto Language Select"
        chilldrenOptions={'Auto Language Select'}
      />
      <SkeletonContainer>
        <TextArea
          disabled={true}
          value={
            textAreaTo
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
