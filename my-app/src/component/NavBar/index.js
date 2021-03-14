import React from "react";
import { FaBars } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  NavContainer,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
} from "./NavBarElement";

const useStyles = makeStyles({
  container: {
    height: "100%",
    padding: "0 24px",
  },
  logo: {
    color: "orange",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  button: {
    color: "white",
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
      <NavContainer>
        <Grid
          className={classes.container}
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Button className={classes.logo} disableRipple>
              JOEY KEUM
            </Button>
          </Grid>
          <Grid item container spacing={3} xs={8} justify="flex-end">
            <Grid item>
              <Button className={classes.button} disableRipple>
                about me
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.button} disableRipple>
                experience
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.button} disableRipple>
                project
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.button} disableRipple>
                contact
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </NavContainer>
    </>
  );
};

export default NavBar;
