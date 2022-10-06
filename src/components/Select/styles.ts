import { min_width874 } from 'src/styles/breakpoints/breakpoints';
import styled from 'styled-components';

export const SelectBox = styled.select`
  width: 100%;
  color: ${(props) => props.theme.colors.textHeader};
  margin-bottom: 20px;
  padding: 0.9em 1.5em;
  border-radius: 0.625em;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  background-image: url(./images/icon-expand.svg);
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 24px;
  appearance: none;
  cursor: pointer;
  @media (${min_width874}) {
    margin-left: 0em;
    max-width: 60%;
  }
`;

export const Option = styled.option``;
