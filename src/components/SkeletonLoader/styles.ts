import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 1rem;
  width: 50%;
  height: 100%;
  z-index: 100;

  animation: skeleton-loading 1s linear infinite alternate;
  
`;

export const Skeleton = styled.div`
  width: 40vmin;
  height: 10vmin;
  border-radius: 10px;
  display: block;
  margin: 0 auto 0 auto;
  pointer-events: none;
  @media(min-width: 1024px){
    width: 30vmin;
    height: 8vmin;
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: Skeleton-loader 1s linear infinite alternate;
  }

  @keyframes Skeleton-loader {
    0% {
      background-color: hsl(200, 30%, 40%);
    }
    100% {
      background-color: hsl(200, 20%, 70%);
    }
  }
`;
