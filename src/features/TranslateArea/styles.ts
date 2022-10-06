import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto 50px auto;
  padding: 0.5em;
  display: block;
  align-items: center;
  gap: 20px;
  align-items: flex-start;
  border-radius: 0.938em;
  @media (min-width: 1024px) {
    width: 60em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 875px) {
    width: 60em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainerTextArea = styled.div``;

export const LastTranslates = styled.div``;

export const SkeletonContainer = styled.div`
  position: relative;
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

export const StarContainer = styled.div`
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
  margin-top: 1rem;
  margin-left: -1.5rem;
`;
