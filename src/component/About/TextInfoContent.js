import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  text: {
    fontSize: 14,
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  name: {
    fontSize: 14,
    color: "orange",
    fontWeight: "500",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  skill: {
    fontSize: "12px",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  skillContainer: {
    marginTop: "5px",
  },
});

const generateList = (desc, classes) =>
  desc.map((text, index) => (
    <Grid
      container
      item
      xs={6}
      justify="flex-start"
      alignItems="center"
      key={index}
    >
      <ArrowRightIcon />
      <Typography className={classes.skill}>{text}</Typography>
    </Grid>
  ));

const TextInfoContent = () => {
  const classes = useStyles();
  var desc = ["React", "Javascript", "HTML", "CSS", "Redux", "Java"];

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
        <br /> I graduated from the University of Waterloo with a Bachelor's in
        Computer Engineering and currently working as a full-time software
        engineer at Tread. My strengths and experience are focused on front-end
        development, but I am also actively expanding my skill set to different
        areas like back-end and full-stack development.
        <br />
        <br />
        These are a few technologies that I have been working with recently:
      </Typography>
      <Grid
        className={classes.skillContainer}
        container
        justify="space-evenly"
        alignItems="center"
      >
        {generateList(desc, classes)}
      </Grid>
    </>
  );
};

export default TextInfoContent;
