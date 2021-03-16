import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";

export const Container = styled.div`
  padding: 75px 10%;
  @media screen and (max-width: 800px) {
    padding: 50px 20px;
  }
`;
export const Header = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

export const Underline = styled.div`
  background: orange;
  height: 4px;
  margin: 10px 0 75px 0;
  width: 100px;
`;

export const FadeLeft = styled.div`
  animation: 1s ${keyframes`${fadeInLeft}`};
`;

export const FadeRight = styled.div`
  animation: 1s ${keyframes`${fadeInRight}`};
`;
