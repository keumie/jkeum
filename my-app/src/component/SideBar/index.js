import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

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
                  projects
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.button} disableRipple>
                  contact
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Sidebar;
