import { max_width874 } from 'styles/breakpoints/breakpoints';
import styled from 'styled-components';

export const Container = styled.div``;

export const SkeletonContainer = styled.div`
  position: relative;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 114px;
  font-size: 24px;
  line-height: 32px;
  padding: 20px 56px 20px 24px;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 0.938em;
  resize: none;
  @media (max-width: 100px) {
    max-width: 60%;
  }
`;

export const BlockButton = styled.div`
@media(${max_width874}){
    margin-top: 20px;
    padding-top: 0;
    display: flex;
    justify-content: space-between;
  }
`;
export const BlockLink = styled.div`
margin-top: 1rem;
margin-left: -1.5rem;
@media(${max_width874}){
  margin: 0;
  }
`;
