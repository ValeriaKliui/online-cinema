import styled from "styled-components";

export const SpinnerStyled = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
