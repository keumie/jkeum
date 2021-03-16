import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  button: {
    color: "white",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const Social = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <IconButton className={classes.button}>
          <GitHubIcon
            fontSize="large"
            onClick={() => window.open("https://github.com/keumie")}
          />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton className={classes.button}>
          <LinkedInIcon
            fontSize="large"
            onClick={() => window.open("https://www.linkedin.com/in/jkeum/")}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Social;
