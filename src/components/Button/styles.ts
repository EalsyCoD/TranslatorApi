import styled from 'styled-components'

import { max_width700, max_width874 } from 'styles/breakpoints/breakpoints'

export const ButtonMain = styled.button`
  padding: 1em 1.5em;
  border-radius: 0.625em;
  margin-left: -4em;
  background-color: ${props => props.theme.colors.primary};
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  @media (${max_width874}) {
    display: block;
    margin-left: 0;
  }
  @media (${max_width700}) {
    display: block;
    margin-left: 0;
  }
`
