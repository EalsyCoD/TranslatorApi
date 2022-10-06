import styled from 'styled-components';

export const Container = styled.div``;
export const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 5px;
`;
export const ContainerItems = styled.div``;
export const Title = styled.p``;
export const HeaderText = styled.h1`
  color: ${(props) => props.theme.colors.textHeader};
  letter-spacing: 2px;
  font-size: 26px;
`;
