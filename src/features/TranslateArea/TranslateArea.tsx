import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Select, SkeletonLoader } from "src/components";

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

import {
  Container,
  TextArea,
  Option,
  ContainerTextArea,
  SkeletonContainer,
} from "./styles";

export const TranslateArea = () => {
  const dispatch = useDispatch();

  const [valueFrom, setValueFrom] = React.useState<string>("");
  const [valueTo, setValueTo] = React.useState<any>();

  const stateLanguages = useSelector((state: RootState) =>
    Object.keys(state.languages.translation as Object)
  );

  const { languageFrom, languageTo } = useSelector(
    (state: RootState) => state.languages
  );

  const detectedWord = useSelector((state: RootState) => state.detected);

  const translateWord = useSelector((state: RootState) => state.translate);

  const TextTranlated: Translate = [
    {
      Text: valueFrom,
    },
  ];

  let intervalRef = React.useRef<any>();

  const handleSwap = () => {
    if (languageFrom && languageTo !== "" && languageFrom !== languageTo) {
      dispatch(swapLangauges());
    }
  };

  const handleTranslate = () => {
    if (languageFrom === "Auto Language Select") {
      dispatch(setTranslate(TextTranlated));
    } else {
      dispatch(setTranslateDefault(TextTranlated));
    }
  };

  const handleCheckKeyboard = () => {
    if (languageFrom !== detectedWord.map((item) => item.language).join()) {
      dispatch(setNotification("Сhange keyboard layout", "error", 5));
    }
  };

  return (
    <>
      <Container>
        <ContainerTextArea>
          <Select
            chilldren={
              <>
                {translateWord.map((item) => (
                  <Option value="Auto Language Select">
                    {item.detectedLanguage.language
                      ? item.detectedLanguage.language
                      : "Auto Language Select"}
                  </Option>
                ))}
                {stateLanguages.map((item, i) => (
                  <Option key={i}>{item}</Option>
                ))}
              </>
            }
            value={languageFrom}
            onChange={(e: any) =>
              dispatch(setLanguageFilterFrom(e.target.value))
            }
            name="select"
          ></Select>
          <TextArea
            id="from"
            value={valueFrom}
            onChange={(e) => {
              setValueFrom(e.target.value);
              clearTimeout(intervalRef.current);
              intervalRef.current = setTimeout(() => {
                handleTranslate();
                dispatch(setDetected(TextTranlated));
                handleCheckKeyboard();
              }, 1000);
            }}
          ></TextArea>
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
            onChange={(e: any) => dispatch(setLanguageFilterTo(e.target.value))}
            name="select"
          ></Select>
          <SkeletonContainer>
            <TextArea
              disabled={true}
              value={
                translateWord.map((item) =>
                  item.translations.map((item) => item.text)
                )
                  ? translateWord.map((item) =>
                      item.translations.map((item) => item.text)
                    )
                  : valueTo
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
