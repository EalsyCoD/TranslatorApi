import styled from 'styled-components';

export const Container = styled.div``;

export const StarContainer = styled.div`
  position: relative;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 114px;
  font-size: 24px;
  line-height: 32px;
  padding: 20px 56px 20px 24px;
  color: ${props => props.theme.colors.primary};
  border-radius: 0.938em;
  resize: none;
  @media (max-width: 100px) {
    max-width: 60%;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 20px;
  right: 3%;
  top: 20%;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`;
