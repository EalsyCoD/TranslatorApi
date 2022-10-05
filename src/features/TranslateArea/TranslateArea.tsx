import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SkeletonLoader } from "src/components";

import {
  setLanguageFilterFrom,
  setLanguageFilterTo,
  swapLangauges,
} from "src/store/actions/LanguageAction";
import { setNotification } from "src/store/actions/NotificationAction";
import { setTranslate } from "src/store/actions/TranslateAction";
import { setDetected } from "src/store/actions/DetectedAction";
import { setTranslateDefault } from "src/store/actions/TranslateDefaultAction";

import { RootState, Translate } from "src/store/types";

import favorites from "../../assets/icon/icon-star.svg";

import {
  Container,
  TextArea,
  Option,
  ContainerTextArea,
  SkeletonContainer,
  StarContainer,
  Image,
} from "./styles";
import { setFavorites } from "src/store/actions/FavoritesAction";
import Select from "src/components/Select/Select";
import Button from "src/components/Button/Button";

export const TranslateArea = () => {
  const dispatch = useDispatch();

  const stateLanguages = useSelector((state: RootState) =>
    Object.keys(state.languages.translation as Object)
  );

  const { languageFrom, languageTo } = useSelector(
    (state: RootState) => state.languages
  );

  const detectedWord = useSelector((state: RootState) => state.detected);

  const translateWord = useSelector(
    (state: RootState) => state.translateDefault
  );
  const translateWordDefault = useSelector(
    (state: RootState) => state.translate
  );

  const [textAreaFrom, setTextAreaFrom] = React.useState<string>("");
  const [textAreaTo, setTextAreaTo] = React.useState<string>(
    translateWord[0].translations[0].text
  );

  const TextTranlated: Translate = [
    {
      Text: textAreaFrom,
    },
  ];

  let intervalRef = React.useRef<any>();

  const handleSwap = React.useCallback(() => {
    if (languageFrom && languageTo !== "" && languageFrom !== languageTo) {
      dispatch(swapLangauges());
    }
  }, []);
  const handleTranslate = () => {
    if (languageFrom === "Auto Language Select") {
      dispatch(setTranslate(TextTranlated));
    } else {
      dispatch(setTranslateDefault(TextTranlated));
    }
  };
  const handleCheckKeyboard = () => {
    setTimeout(() => {
      if (
        languageFrom === detectedWord.map((item) => item.language).toString()
      ) {
      } else if (languageFrom === "Auto Language Select") {
      } else if (
        languageFrom !== detectedWord.map((item) => item.language).join()
      ) {
        dispatch(setNotification("Сhange keyboard layout", "error", 5));
      }
    }, 3000);
  };

  const HandleSelect = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setLanguageFilterFrom(e.target.value));
    },
    []
  );

  return (
    <>
      <Container>
        <ContainerTextArea>
          <Select
            chilldren={
              <>
                <Option value="Auto Language Select">
                  Auto Language Select
                </Option>
                {stateLanguages.map((item, i) => (
                  <Option key={i}>{item}</Option>
                ))}
              </>
            }
            value={languageFrom ? languageFrom : detectedWord[0].language}
            onChange={HandleSelect}
            name="select"
          ></Select>
          <StarContainer>
            <TextArea
              id="from"
              value={textAreaFrom}
              onChange={(e) => {
                setTextAreaFrom(e.target.value);
                clearTimeout(intervalRef.current);
                intervalRef.current = setTimeout(() => {
                  handleTranslate();
                  dispatch(setDetected(TextTranlated));
                  handleCheckKeyboard();
                }, 1000);
              }}
            ></TextArea>
            <Image
              onClick={() =>
                dispatch(
                  setFavorites(
                    textAreaFrom,
                    translateWord[0].translations[0].text
                  )
                )
              }
              src={favorites}
              alt="favorites"
            />
          </StarContainer>
        </ContainerTextArea>
        <ContainerTextArea>
          <Select
            chilldren={
              <>
                <Option value="Select Language">Select Language</Option>
                {stateLanguages.map((item, i) => (
                  <Option key={i}>{item}</Option>
                ))}
              </>
            }
            value={languageTo}
            onChange={(e) => dispatch(setLanguageFilterTo(e.target.value))}
            name="select"
          ></Select>
          <SkeletonContainer>
            <TextArea
              disabled={true}
              value={
                translateWord[0].translations[0].text
                  ? translateWord[0].translations[0].text
                  : translateWordDefault[0].translations[0].text
              }
            ></TextArea>
            <SkeletonLoader />
          </SkeletonContainer>
          <Button textButton="Switch" type="submit" onClick={handleSwap} />
        </ContainerTextArea>
      </Container>
    </>
  );
};
