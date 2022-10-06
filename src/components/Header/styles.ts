import { min_width1024 } from 'src/styles/breakpoints/breakpoints';
import styled from 'styled-components';

export const Container = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 50px 0 30px 0;
  @media (${min_width1024}) {
    width: 60em;
    padding: 100px 0 30px 0;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textHeader};
  letter-spacing: 2px;
  font-size: 26px;
`;
