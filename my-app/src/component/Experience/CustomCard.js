import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "./TextInfoContent";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    // width: "200px",
    // height: "200px",
    // marginLeft: "auto",
    // marginTop: spacing(-3),
    // paddingBottom: "48%",
    flexShrink: 0,
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    // [breakpoints.up("md")]: {
    width: "200px",
    height: "200px",
    marginLeft: spacing(-3),
    marginTop: 0,
    transform: "translateX(-8px)",
    // },
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
  boxStyle: {
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    width: "100%",
  },
}));

const shadowStyle = makeStyles({
  root: ({ inactive }) => ({
    boxShadow: "5px 5px 50px 5px rgba(0,0,0)",
    // transition: "0.3s",
    // ...(!inactive && {
    //   "&:hover": {
    //     transform: "translateY(-3px)",
    //     boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
    //   },
    // }),
  }),
});

export const CustomCard = React.memo(function BlogCard(props) {
  const { logo, overline, heading, title, desc, location } = props;
  const styles = useStyles();
  const shadowStyles = shadowStyle();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={logo} />
      <CardContent className={styles.boxStyle}>
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
});

export default CustomCard;
