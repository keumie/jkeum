import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import bgrslogo from "../../images/bgrslogo.jpg";
import atologo from "../../images/atologo.jpg";
import rbhlogo from "../../images/rbhlogo.png";

import { makeStyles } from "@material-ui/core/styles";
import wmlogo from "../../images/wmlogo.jpg";
import { withStyles } from "@material-ui/core/styles";
import ExperienceModal from "./ExperienceModal";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  ExperienceContainer,
  ExperienceHeader,
  ExperienceLogo,
  EInfoTitle,
  EInfoSub,
  EInfoDesc,
} from "./ExperienceElement";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "orange",
  },
}))(Button);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Experience = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = {
    media: {
      height: "100px",
      paddingTop: "56.25%", // 16:9
    },
    card: {
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "black",
      backgroundColor: "white",
    },
  };
  const classes = useStyles();

  return (
    <ExperienceContainer>
      <ExperienceHeader>experience</ExperienceHeader>
      <ColorButton onClick={handleClickOpen}>Open dialog</ColorButton>
      <ExperienceModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      {/* <Grid container spacing={2}>
        <Grid item xs={3}>
          <ExperienceLogo src={bgrslogo} />
        </Grid>
        <Grid item xs={3}>
          <ExperienceLogo src={atologo} />
        </Grid>
        <Grid item xs={3}>
          <ExperienceLogo src={rbhlogo} />
        </Grid>
        <Grid item xs={3}>
          <ExperienceLogo src={wmlogo} />
        </Grid>
      </Grid> */}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="BGRS"
                max-width="200px"
                height="auto"
                src={bgrslogo}
                title="BGRS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ATO"
                max-width="200px"
                height="auto"
                src={atologo}
                title="ATO"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="RBH"
                max-width="200px"
                height="auto"
                src={rbhlogo}
                title="RBH"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="WM"
                max-width="200px"
                height="auto"
                src={wmlogo}
                title="WM"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
