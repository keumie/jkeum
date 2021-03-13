import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "./TextInfoContent";

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
  const { logo, overline, heading, title, desc, location } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={logo} />
      <CardContent className={classes.text}>
        <TextInfoContent
          overline={overline}
          heading={heading}
          title={title}
          desc={desc}
          location={location}
        />
      </CardContent>
    </Card>
  );
};

export default CustomCard;
