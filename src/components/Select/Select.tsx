import React from 'react'

import { useAppSelector } from 'hooks/useAppSelector'
import { RootState } from 'store/reducers'

import { Option, SelectBox } from './styles'

interface SelectProps {
  chilldrenOptions: string
  value: string | undefined
  optionsValue?: string
  name?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default React.memo(
  ({ chilldrenOptions, optionsValue, value, name, onChange }: SelectProps) => {
    const stateLanguages = useAppSelector((state: RootState) =>
      Object.keys(state.language.translation as Object),
    )

    return (
      <SelectBox onChange={onChange} name={name} value={value}>
        {optionsValue && (
          <Option value={optionsValue}>{chilldrenOptions}</Option>
        )}
        {stateLanguages.map((item, i) => (
          <Option key={i}>{item}</Option>
        ))}
      </SelectBox>
    )
  },
)
