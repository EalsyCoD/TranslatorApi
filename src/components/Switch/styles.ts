import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`;

export const Title = styled.p`
  text-transform: uppercase;
`;

export const SwitcherIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.theme.iconSwitch});
  background-repeat: no-repeat;
  background-position: center;
`;
