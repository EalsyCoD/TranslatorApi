import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/reducers';
import { SelectBox, Option } from './styles';

interface SelectProps {
  chilldrenOptions: string;
  value: string | undefined;
  optionsValue?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default React.memo(function Select({
  chilldrenOptions,
  optionsValue,
  value,
  name,
  onChange,
}: SelectProps) {
  const stateLanguages = useSelector((state: RootState) =>
    Object.keys(state.language.translation as Object),
  );
  return (
    <SelectBox onChange={onChange} name={name} value={value}>
      {optionsValue && <Option value={optionsValue}>{chilldrenOptions}</Option>}
      {stateLanguages.map((item, i) => (
        <Option key={i}>{item}</Option>
      ))}
    </SelectBox>
  );
});
