import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto 50px auto;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  align-items: flex-start;
  border-radius: 0.938em;
  @media (min-width: 1024px) {
    width: 60em;
  }
`;

// background: ${(props) => props.theme.colors.backgroundColorContent};

export const ContainerTextArea = styled.div``;

export const Select = styled.select`
  width: 60%;
  color: ${(props) => props.theme.colors.textHeader};
  margin-bottom: 20px;
  padding: 0.9em 1.5em;
  border-radius: 0.625em;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  background-image: url(./images/icon-expand.svg);
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 24px;
  appearance: none;
  cursor: pointer;
  @media (min-width: 700px) {
    width: 40%;
  }
`;
export const Option = styled.option``;

export const TextArea = styled.textarea`
  width: 400px;
  height: 114px;
  font-size: 24px;
  line-height: 32px;
  padding: 20px 56px 20px 24px;
  border-radius: 0.938em;
  resize: none;
`;
