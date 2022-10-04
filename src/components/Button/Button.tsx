import React from "react";

import { ButtonMain } from "./styles";

interface ButtonProps {
  textButton: string;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  textButton,
  type = "submit",
  onClick,
}) => {
  return (
    <ButtonMain onClick={onClick} type={type}>
      {textButton}
    </ButtonMain>
  );
};
