import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto 50px auto;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  border-radius: 0.938em;
  @media (min-width: 1024px) {
    width: 50em;
  }
`;

export const TextArea = styled.textarea`
  width: 400px;
  height: 114px;
  font-size: 24px;
  line-height: 32px;
  padding: 20px 56px 20px 24px;
  border-radius: 0.938em;
  resize: none;
`;
