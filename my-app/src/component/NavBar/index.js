import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    background: "black",
    width: "100%",
    height: "80px",
    boxSizing: "border-box",
    zIndex: 10,
  },
  container: {
    height: "100%",
    padding: "0 24px",
  },
  logo: {
    color: "orange",
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  button: {
    color: "white",
    cursor: "pointer",
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  const width = useMediaQuery("(min-width:800px)");

  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className={classes.logo}
          >
            JOEY KEUM
          </Link>
        </Grid>
        <Grid
          item
          container
          spacing={3}
          xs={8}
          justify="flex-end"
          alignItems="center"
        >
          {width ? (
            <>
              <Grid item>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={classes.button}
                >
                  about me
                </Link>
              </Grid>
              <Grid item>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={classes.button}
                >
                  experience
                </Link>
              </Grid>
              <Grid item>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={classes.button}
                >
                  projects
                </Link>
              </Grid>
              <Grid item>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={classes.button}
                >
                  contact
                </Link>
              </Grid>
            </>
          ) : (
            <IconButton
              className={classes.button}
              disableRipple
              onClick={props.toggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
