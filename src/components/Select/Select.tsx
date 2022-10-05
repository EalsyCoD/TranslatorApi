import React from "react";

import { SelectBox } from "./styles";

interface SelectProps {
  chilldren: JSX.Element | JSX.Element[];
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default React.memo(function Select({
  chilldren,
  value,
  name,
  onChange,
}: SelectProps) {
  return (
    <SelectBox onChange={onChange} name={name} value={value}>
      {chilldren}
    </SelectBox>
  );
});
