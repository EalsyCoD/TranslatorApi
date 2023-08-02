import React from 'react'

import { ButtonMain } from './styles'

interface ButtonProps {
  textButton?: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
}

export default React.memo(
  ({ textButton, type = 'submit', onClick }: ButtonProps) => (
    <ButtonMain onClick={onClick} type={type}>
      {textButton}
    </ButtonMain>
  ),
)
