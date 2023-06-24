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

const generateList = (list, classes) =>
  list.map((text, index) => (
    <Grid
      container
      item
      xs={4}
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
  const frontend = [
    "React",
    "Typescript",
    "Javascript",
    "HTML",
    "CSS",
    "Redux",
    "Apollo GraphQL",
  ];

  const backend = ["Java", "Go"];

  const database = ["PostgreSQL"];

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
        <br />
        I am a highly skilled software engineer specializing in frontend
        development, with expertise in React.js, Typescript, and JavaScript.
        Known for my ability to optimize performance and create exceptional user
        experiences, I have a track record of delivering innovative solutions
        that increase platform usage and prioritize user needs. I excel at
        collaborating with cross-functional teams and thrive both independently
        and as a team player in delivering high-quality software solutions.
        <br />
        <br />
        While my strengths primarily lie in frontend development, I am actively
        expanding my skill set to include backend technologies such as Go and
        PostgreSQL.
        <br />
        <br />
        I am currently seeking a software engineering position where I can apply
        my expertise to build intuitive and high-performance solutions. Please
        reach out to discuss how I can contribute to your team.
        <br />
        <br />
        These are a few technologies that I have been working with recently:
        <br />
      </Typography>
      <Typography className={classes.text} display="inline">
        Frontend:
      </Typography>
      <Grid
        className={classes.skillContainer}
        container
        justify="flex-start"
        alignItems="center"
      >
        {generateList(frontend, classes)}
      </Grid>
      <Typography className={classes.text} display="inline">
        Backend:
      </Typography>
      <Grid
        className={classes.skillContainer}
        container
        justify="flex-start"
        alignItems="center"
      >
        {generateList(backend, classes)}
      </Grid>
      <Typography className={classes.text} display="inline">
        Database:
      </Typography>
      <Grid
        className={classes.skillContainer}
        container
        justify="flex-start"
        alignItems="center"
      >
        {generateList(database, classes)}
      </Grid>
    </>
  );
};

export default TextInfoContent;
