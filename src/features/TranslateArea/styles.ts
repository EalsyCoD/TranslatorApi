import { min_width1024, min_width875 } from 'styles/breakpoints/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto 50px auto;
  padding: 0.5em;
  display: block;
  align-items: center;
  gap: 30px;
  align-items: flex-start;
  border-radius: 0.938em;
  @media (${min_width1024}) {
    width: 55em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (${min_width875}) {
    width: 55em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ContainerTextArea = styled.div`
`;
export const ContainerLastTranslates = styled.div`
width: 100%;
`;
