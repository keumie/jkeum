import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavBarElement";

const NavBar = () => {
  return (
    <NavbarContainer>
      <NavLogo to="home">Website</NavLogo>
      <NavMenu>
        <NavItem>
          <NavLinks to="about">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="experience">Experience</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="project">Projects</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="game">Game</NavLinks>
        </NavItem>
      </NavMenu>
      <MobileIcon>
        <FaBars />
      </MobileIcon>
    </NavbarContainer>
  );
};

export default NavBar;
