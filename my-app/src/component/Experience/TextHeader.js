import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  date: {
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
});

const TextHeader = (props) => {
  const { date, heading, title, location, width } = props;
  const classes = useStyles();

  return (
    <>
      {width ? (
        <>
          <Grid container justify="space-between" alignItems="center">
            <Typography component={"h4"} className={classes.heading}>
              {heading}
            </Typography>
            <Typography component={"span"} className={classes.date}>
              {date}
            </Typography>
          </Grid>
          <Grid container justify="space-between" alignItems="center">
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.location}>{location}</Typography>
          </Grid>
        </>
      ) : (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Typography component={"h4"} className={classes.heading}>
            {heading}
          </Typography>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.location}>{location}</Typography>
          <Typography component={"span"} className={classes.date}>
            {date}
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default TextHeader;
