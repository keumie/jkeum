import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "100%",
    height: "100%",
    background: "#0d0d0d",
    transition: "all 0.8s ease-in-out",
    padding: "24px",
    zIndex: "20",
    boxSizing: "border-box",
  },
  container: {
    height: "100%",
  },
  button: {
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
  option: {
    height: "100%",
  },
});

const Sidebar = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.isOpen && (
        <div className={classes.root} onClick={props.toggle}>
          <Grid
            container
            className={classes.container}
            direction="column"
            wrap="nowrap"
          >
            <Grid item container justify="flex-end" alignItems="center">
              <IconButton className={classes.button} disableRipple>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid
              className={classes.option}
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={classes.button}
                  onClick={props.toggle}
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
                  onClick={props.toggle}
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
                  onClick={props.toggle}
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
                  onClick={props.toggle}
                >
                  contact
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Sidebar;
