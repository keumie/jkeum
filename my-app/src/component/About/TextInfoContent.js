import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  overline: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: 12,
    display: "inline-block",
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",

    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: "0.35em",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    color: "orange",
    textTransform: "uppercase",
  },
  location: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: "0.35em",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    textTransform: "uppercase",
  },
  body: {
    fontSize: "12px",
    letterSpacing: "0.00938em",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    lineHeight: "24px",
  },
});

const generateList = (desc, classes) =>
  desc.map((text) => (
    <Grid container justify="flex-start" alignItems="flex-start" wrap="nowrap">
      <ArrowRightIcon />
      <Typography className={classes.body}>{text}</Typography>
    </Grid>
  ));

const TextInfoContent = ({ overline, heading, title, desc, location }) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.root}
        container
        justify="space-between"
        alignItems="center"
      >
        <Typography component={"h4"} className={classes.heading}>
          {heading}
        </Typography>
        <Typography component={"span"} className={classes.overline}>
          {overline}
        </Typography>
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.location}>{location}</Typography>
      </Grid>
      {generateList(desc, classes)}
    </>
  );
};

export default TextInfoContent;
