import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const TitleGrid = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  font-size: 20px;
`;
export const ContainerItems = styled.div``;
export const Title = styled.p``;
export const HeaderText = styled.h1`
  color: ${props => props.theme.colors.textHeader};
  letter-spacing: 2px;
  font-size: 26px;
  text-align: center;
`;
