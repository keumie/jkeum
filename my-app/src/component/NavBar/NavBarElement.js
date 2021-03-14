import styled from "styled-components";
import { Link } from "react-scroll";

export const NavContainer = styled.div`
  position: fixed;
  background: black;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  width: 100%;
  height: 80px;
  padding: 0 24px;
  box-sizing: border-box;
  z-index: 10;
`;

export const NavLogo = styled.div`
  color: orange;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    cursor: pointer;
    color: white;
    font-size: 1.8 rem;
  }
`;

export const NavMenu = styled.ul`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavLinks = styled(Link)`
  padding: 0 1.5rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &.active {
    border-bottom: 3px solid orange;
  }
`;
