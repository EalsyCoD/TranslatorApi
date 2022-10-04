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

export const Option = styled.option``;
export const SkeletonContainer = styled.div`
  position: relative;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 114px;
  font-size: 24px;
  line-height: 32px;
  padding: 20px 56px 20px 24px;
  border-radius: 0.938em;
  resize: none;
  @media (max-width: 100px) {
    max-width: 60%;
  }
`;
