import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.div`
  background: black;
  height: 80px;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
`;

export const NavLogo = styled.div`
  color: orange;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8 rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid orange;
  }
`;
