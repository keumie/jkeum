import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  },
  button: {
    color: "white",
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
          <Button className={classes.logo} disableRipple>
            JOEY KEUM
          </Button>
        </Grid>
        <Grid item container spacing={3} xs={8} justify="flex-end">
          {width ? (
            <>
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
