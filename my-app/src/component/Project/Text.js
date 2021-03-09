import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
  title: {
    width: "100%",
    fontSize: "30px",
    color: "orange",
  },
  tool: {
    width: "100%",
    color: "gray",
    paddingBottom: "35px",
  },
  description: { width: "100%", paddingBottom: "20px" },
  task: { width: "100" },
  link: { width: "100%" },
});

const Test = (props) => {
  const { title, tools, description, task } = props;
  console.log(props);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.tool}>{tools}</Typography>
        <Typography className={classes.description}>{description}</Typography>

        <Typography className={classes.task}>{task}</Typography>
        {/* <Typography className={classes.link}>{}</Typography> */}
        <Grid container justify="flex-end" alignItems="center">
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LaunchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Test;
