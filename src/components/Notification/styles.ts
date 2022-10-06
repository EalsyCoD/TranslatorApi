import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 1;
`;

export const Notification = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  padding: 6px 16px 6px 16px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  color: #ffffff;
  transform: translateX(120%);
  animation: ani 2s forwards;
  @keyframes ani {
    0% {
      transform: translateX(120%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const Icon = styled.img`
  opacity: 0.8;
`;

export const Message = styled.div`
  margin-left: 12px;
  padding: 8px 5px 8px 0;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.0105rem;
  opacity: 0.9;
`;
