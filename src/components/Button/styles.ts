import styled from "styled-components";

export const ButtonMain = styled.button`
  padding: 1em 1.5em;
  border-radius: 0.625em;
  margin-left: -4em;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  @media (max-width: 874px) {
    display: block;
    margin-left: 0;
  }
  @media (max-width: 700px) {
    display: block;
    margin-left: 0;
  }
`;
