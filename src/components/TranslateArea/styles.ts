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

export const Select = styled.select`
  width: 100%;
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
  @media (min-width: 874px) {
    margin-left: 0em;
    max-width: 60%;
  }
`;
export const Option = styled.option``;

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

export const ButtonSwitch = styled.button`
  padding: 1em 1.5em;
  border-radius: 0.625em;
  margin-left: -4em;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  @media (max-width: 874px) {
    display: block;
    margin-left: 0;
  }
  @media (max-width: 700px) {
    display: block;
    margin-left: 0;
  }
`;
