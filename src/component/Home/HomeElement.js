import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-scroll";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #0c0c0c;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100vw;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HomeContent = styled.div`
  display: flex;
  position: absolute;
  max-width: 1200px;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const HomeH1 = styled.h1`
  display: inline;
  text-align: center;
  color: white;
  font-size: 48px;
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`;

export const HomeName = styled.div`
  display: inline;
  color: orange;
`;

export const HomeP = styled.p`
  margin-top: 24px;
  max-width: 600px;
  text-align: center;
  font-size: 24px;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
  color: orange;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Button = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 50px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: orange;
  }
`;
