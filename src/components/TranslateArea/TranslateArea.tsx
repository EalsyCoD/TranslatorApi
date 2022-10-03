import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setLanguageFilterFrom,
  setLanguageFilterTo,
} from "src/store/actions/LanguageAction";

import { RootState } from "src/store/types";

import {
  Container,
  Select,
  TextArea,
  Option,
  ContainerTextArea,
} from "./styles";

export const TranslateArea = () => {
  const dispatch = useDispatch();
  const stateLanguages = useSelector((state: RootState) =>
    Object.keys(state.languages.translation as Object)
  );
  const { languageFrom, languageTo } = useSelector(
    (state: RootState) => state.languages
  );
  const [value, setValue] = React.useState<string>("");
  let intervalRef = React.useRef<any>();

  return (
    <Container>
      <ContainerTextArea>
        <Select
          defaultValue={languageFrom}
          onChange={(e) => dispatch(setLanguageFilterFrom(e.target.value))}
          name="select"
        >
          <Option value="Select Language">Select Language</Option>
          {stateLanguages.map((item, i) => (
            <Option key={i}>{item}</Option>
          ))}
        </Select>
        <TextArea
          value={value}
          onChange={(e) => {
            setValue(e.target.value);

            clearTimeout(intervalRef.current);

            intervalRef.current = setTimeout(() => {
              if (e.target.value.length !== 0) {
                console.log("Запрос");
              }
            }, 1000);
          }}
        />
      </ContainerTextArea>
      <ContainerTextArea>
        <Select
          defaultValue={languageTo}
          onChange={(e) => dispatch(setLanguageFilterTo(e.target.value))}
          name="select"
        >
          <Option value="Select Language">Select Language</Option>
          {stateLanguages.map((item, i) => (
            <Option key={i}>{item}</Option>
          ))}
        </Select>
        <TextArea />
      </ContainerTextArea>
    </Container>
  );
};
