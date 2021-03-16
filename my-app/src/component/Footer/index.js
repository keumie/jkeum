import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: "white",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Typography className={classes.text}>Joey Keum ©2021</Typography>
      </Grid>
    </div>
  );
};

export default Footer;
