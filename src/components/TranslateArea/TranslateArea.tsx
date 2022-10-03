import React from "react";

import { Container, TextArea } from "./styles";

export const TranslateArea = () => {
  const [value, setValue] = React.useState<string>("");
  let intervalRef = React.useRef<any>();

  return (
    <Container>
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
      <TextArea />
    </Container>
  );
};
