import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
  text: {
    fontSize: 14,
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
});

const Test = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Typography>Title</Typography>
        <Typography>Tools</Typography>
        <Typography>Description</Typography>
        <Typography>Links</Typography>
      </Grid>
    </div>
  );
};

export default Test;
