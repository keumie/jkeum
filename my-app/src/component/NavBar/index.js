import React from "react";
import { FaBars } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
} from "./NavBarElement";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <>
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
      <Grid container justify="center" alignItems="center">
        <Button>about me</Button>
        <Button>experience</Button>
        <Button>project</Button>
        <Button>contact</Button>
      </Grid>
    </>
  );
};

export default NavBar;
