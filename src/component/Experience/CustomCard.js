import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextHeader from "./TextHeader";
import Description from "./Description";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "16px",
    boxShadow: "5px 5px 50px 5px rgba(0,0,0)",
    overflow: "initial",
    display: "flex",
    padding: "16px 0",
    flexDirection: "row",
  },
  media: {
    flexShrink: 0,
    borderRadius: "16px",
    backgroundColor: "white",
    width: "200px",
    height: "200px",
    marginLeft: "-24px",
    transform: "translateX(-8px)",
    [theme.breakpoints.down(650)]: {
      width: "100%",
      marginLeft: 0,
      transform: "translateX(-16px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #757575 75%)",
      borderRadius: "16px",
      opacity: 0.2,
    },
  },
  text: {
    width: "100%",
    [theme.breakpoints.down(925)]: {
      width: "auto",
    },
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
}));

export const CustomCard = (props) => {
  const { logo, date, heading, title, desc, location, tool } = props;
  const classes = useStyles();
  const width = useMediaQuery("(min-width:925px)");

  return (
    <>
      {width ? (
        <Card className={classes.root} data-aos="flip-up">
          <CardMedia className={classes.media} image={logo} />
          <CardContent className={classes.text}>
            <TextHeader
              date={date}
              heading={heading}
              title={title}
              location={location}
              width={width}
              tool={tool}
            />
            <Description desc={desc} />
          </CardContent>
        </Card>
      ) : (
        <Card className={classes.root} data-aos="flip-left">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid container justify="flex-start" alignItems="center">
              <CardMedia className={classes.media} image={logo} />
              <CardContent className={classes.text}>
                <TextHeader
                  date={date}
                  heading={heading}
                  title={title}
                  location={location}
                  width={width}
                  tool={tool}
                />
              </CardContent>
            </Grid>
            <CardContent className={classes.text}>
              <Description desc={desc} />
            </CardContent>
          </Grid>
        </Card>
      )}
    </>
  );
};

export default CustomCard;
