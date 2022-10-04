import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setLanguageFilterFrom,
  setLanguageFilterTo,
  swapLangauges,
} from "src/store/actions/LanguageAction";

import { setTranslate } from "src/store/actions/TranslateAction";
import { setTranslateDefault } from "src/store/actions/TranslateDefaultAction";

import { RootState, Translate } from "src/store/types";
import { SkeletonLoader } from "../SkeletonLoader";

import {
  Container,
  Select,
  TextArea,
  Option,
  ContainerTextArea,
  ButtonSwitch,
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

  const translateWord = useSelector((state: RootState) => state.translate);

  const TextTranlated: Translate = [
    {
      Text: valueFrom,
    },
  ];

  let intervalRef = React.useRef<any>();

  const handleSwap = () => {
    if (languageFrom && languageTo !== "") {
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

  return (
    <>
      <Container>
        <ContainerTextArea>
          <Select
            value={languageFrom}
            onChange={(e) => dispatch(setLanguageFilterFrom(e.target.value))}
            name="select"
          >
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
          </Select>
          <TextArea
            value={valueFrom}
            onChange={(e) => {
              setValueFrom(e.target.value);
              clearTimeout(intervalRef.current);

              intervalRef.current = setTimeout(() => {
                handleTranslate();
              }, 1000);
            }}
          ></TextArea>
        </ContainerTextArea>
        <ContainerTextArea>
          <Select
            value={languageTo}
            onChange={(e) => dispatch(setLanguageFilterTo(e.target.value))}
            name="select"
          >
            <Option value="Select Language">Select Language</Option>
            {stateLanguages.map((item, i) => (
              <Option key={i}>{item}</Option>
            ))}
          </Select>
          <div style={{ position: "relative" }}>
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
          </div>
          <ButtonSwitch type="submit" onClick={handleSwap}>
            Switch
          </ButtonSwitch>
        </ContainerTextArea>
      </Container>
    </>
  );
};
