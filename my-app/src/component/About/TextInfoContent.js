import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  text: {
    fontSize: 15,
  },
  name: {
    fontSize: 15,
    color: "orange",
    fontWeight: "500",
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
      <Typography className={classes.text} display="inline">
        Hello! My name is{" "}
      </Typography>
      <Typography className={classes.name} display="inline">
        Joey Keum{" "}
      </Typography>
      <Typography className={classes.text} display="inline">
        and I am a software developer currently based in Canada.
        <br />
        <br /> I enjoy creating and tinkering with various things that impact
        the world ranging from simple tools to complex algorithms. My goal is to
        build products that are both performance-driven and innovative.
        <br />
        <br /> I recently graduated from the University of Waterloo with a
        Bachelor's in Computer Engineering and now looking to join the software
        industry. My current strengths and experience were more focused on the
        frontend side however moving forward, I am open to exploring and
        expanding my skill set to different areas.
      </Typography>
      <Grid container justify="space-between" alignItems="center">
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.location}>{location}</Typography>
      </Grid>
      {/* {generateList(desc, classes)} */}
    </>
  );
};

export default TextInfoContent;
