import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    boxSizing: "border-box",
    height: "100%",
  },
  title: {
    fontSize: "25px",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "orange",
  },
  tool: {
    color: "gray",
    paddingBottom: "75px",
  },
  description: { paddingBottom: "20px" },
  button: {
    color: "black",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: "5px",
  },
});

const Test = (props) => {
  const { title, tools, description, task, github, link } = props;
  console.log(props);
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.tool}>{tools}</Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Typography>{task}</Typography>
      </Grid>
      <Grid container justify="flex-end" alignItems="center">
        <IconButton>
          <GitHubIcon
            className={classes.button}
            fontSize="large"
            onClick={() => window.open(github)}
          />
        </IconButton>
        <IconButton>
          <LaunchIcon
            className={classes.button}
            fontSize="large"
            onClick={() => window.open(link)}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Test;
