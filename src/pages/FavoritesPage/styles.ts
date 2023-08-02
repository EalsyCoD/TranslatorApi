import {
  max_width620,
  min_width1024,
  min_width875,
} from 'styles/breakpoints/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (${min_width1024}) {
    width: 55em;
  }
  @media (${min_width875}) {
    width: 55em;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${max_width620}) {
    display: block;
    & > button {
      margin-top: 10px;
    }
  }
`;
export const FavoritesContainer = styled.div``;
export const Title = styled.h1``;
