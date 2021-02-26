import React from "react";
import { FaBars } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import {
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
} from "./NavBarElement";

const NavBar = (props) => {
  return (
    <NavbarContainer>
      <NavLogo to="home">Joey Keum</NavLogo>
      <Typography>
        <NavMenu>
          <NavLinks to="about">About</NavLinks>
          <NavLinks to="experience">Experience</NavLinks>
          <NavLinks to="project">Projects</NavLinks>
          <NavLinks to="game">Game</NavLinks>
        </NavMenu>
      </Typography>
      <MobileIcon onClick={props.toggle}>
        <FaBars />
      </MobileIcon>
    </NavbarContainer>
  );
};

export default NavBar;
