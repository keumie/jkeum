import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "./TextInfoContent";
import bgrslogo from "../../images/transpbgrslogo.png";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    // maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "auto",
    height: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    // paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "200px",
      height: "200px",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #757575 75%)",
      borderRadius: spacing(2), // 16
      opacity: 0.2,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  button: {
    backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
    boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
    borderRadius: 100,
    paddingLeft: 24,
    paddingRight: 24,
    color: "#ffffff",
  },
}));

const boxStyle = makeStyles(({ spacing }) => {
  const family =
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
  return {
    overline: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.35em",
      fontFamily: family,
    },
    body: {
      marginBottom: spacing(2),
      fontSize: "0.8rem",
      letterSpacing: "0.00938em",
      fontFamily: family,
    },
  };
});

const shadowStyle = makeStyles({
  root: ({ inactive }) => ({
    boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
    transition: "0.3s",
    ...(!inactive && {
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
      },
    }),
  }),
});

export const CustomCard = React.memo(function BlogCard() {
  const styles = useStyles();
  const contentStyles = boxStyle();
  const shadowStyles = shadowStyle();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={bgrslogo} />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={"28 MAR 2019  ~  30 MAR 2019"}
          heading={"BGRS"}
          body={
            "Git is a distributed version control system. Every dev has a working copy of the code and..."
          }
        />
        <Button className={styles.button}>Read more</Button>
      </CardContent>
    </Card>
  );
});

export default CustomCard;
