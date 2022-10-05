import React from "react";

import { ButtonMain } from "./styles";

interface ButtonProps {
  textButton?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export default React.memo(function Button({
  textButton,
  type = "submit",
  onClick,
}: ButtonProps) {
  return (
    <ButtonMain onClick={onClick} type={type}>
      {textButton}
    </ButtonMain>
  );
});
