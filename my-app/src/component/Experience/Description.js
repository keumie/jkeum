import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  body: {
    fontSize: "12px",
    letterSpacing: "0.00938em",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    lineHeight: "24px",
  },
});

const Description = ({ desc }) => {
  const classes = useStyles();
  return (
    <>
      {desc.map((text) => (
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          wrap="nowrap"
        >
          <ArrowRightIcon />
          <Typography className={classes.body}>{text}</Typography>
        </Grid>
      ))}
    </>
  );
};

export default Description;
