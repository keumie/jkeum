import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "./TextInfoContent";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    borderRadius: "16px",
    boxShadow: "5px 5px 50px 5px rgba(0,0,0)",
    overflow: "initial",
    display: "flex",
    width: "70%",
    flexDirection: "row",
    padding: "16px 0",
    [theme.breakpoints.down(700)]: {
      padding: "0",
      flexDirection: "column",
    },
  },
  media: {
    flexShrink: 0,
    borderRadius: "16px",
    backgroundColor: "white",
    width: "250px",
    height: "450px",
    marginRight: "-24px",
    transform: "translateX(8px)",
    [theme.breakpoints.down(700)]: {
      transform: "translateX(0px)",
      margin: "0",
      width: "auto",
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
    width: "auto",
  },
}));

export const CustomCard = (props) => {
  const { logo } = props;
  const classes = useStyles();

  return (
    <div data-aos="flip-up">
      <Card className={classes.root}>
        <CardContent className={classes.text}>
          <TextInfoContent />
        </CardContent>
        <CardMedia className={classes.media} image={logo} />
      </Card>
    </div>
  );
};

export default CustomCard;
