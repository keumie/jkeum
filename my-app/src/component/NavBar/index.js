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
      <NavLogo to="home">JOEY KEUM</NavLogo>
      <Typography>
        <NavMenu>
          <NavLinks to="about">about</NavLinks>
          <NavLinks to="experience">experience</NavLinks>
          <NavLinks to="project">projects</NavLinks>
          <NavLinks to="game">contact</NavLinks>
        </NavMenu>
      </Typography>
      <MobileIcon onClick={props.toggle}>
        <FaBars />
      </MobileIcon>
    </NavbarContainer>
  );
};

export default NavBar;
