import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setLanguageFilterFrom,
  setLanguageFilterTo,
  swapLangauges,
} from "src/store/actions/LanguageAction";

import { setTranslate } from "src/store/actions/TranslateAction";

import { RootState, Translate } from "src/store/types";

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
  const stateLanguages = useSelector((state: RootState) =>
    Object.keys(state.languages.translation as Object)
  );

  const { languageFrom, languageTo } = useSelector(
    (state: RootState) => state.languages
  );

  const translateWord = useSelector((state: RootState) => state.translate);
  const [valueFrom, setValueFrom] = React.useState<string>("");

  const [valueTo, setValueTo] = React.useState<string>("");
  let intervalRef = React.useRef<any>();

  const handleSwap = () => {
    if (languageFrom && languageTo !== "") {
      dispatch(swapLangauges());
    }
  };
  const TextTranlated: Translate = [
    {
      Text: valueFrom,
    },
  ];
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
              <Option value="Select Language">
                {item.detectedLanguage.language
                  ? item.detectedLanguage.language
                  : "Auto Language Default"}
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
                if (e.target.value.length) {
                  dispatch(setTranslate(TextTranlated));
                }
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
          <TextArea disabled={true} value={valueTo}></TextArea>
          <ButtonSwitch type="submit" onClick={handleSwap}>
            Switch
          </ButtonSwitch>
        </ContainerTextArea>
      </Container>
    </>
  );
};
