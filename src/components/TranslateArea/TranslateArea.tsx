import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/store/types";

import {
  Container,
  Select,
  TextArea,
  Option,
  ContainerTextArea,
} from "./styles";

export const TranslateArea = () => {
  const stateLanguages = useSelector((state: RootState) =>
    Object.keys(state.languages.translation)
  );
  const [isFrom, setIsFrom] = React.useState<string>("");
  const [isTo, setIsTo] = React.useState<string>("");
  const [value, setValue] = React.useState<string>("");
  let intervalRef = React.useRef<any>();

  return (
    <Container>
      <ContainerTextArea>
        <Select
          defaultValue={isFrom}
          onChange={(e) => setIsFrom(e.target.value)}
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
          defaultValue={isTo}
          onChange={(e) => setIsTo(e.target.value)}
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
