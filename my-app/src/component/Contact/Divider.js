import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "1px solid black",
    width: "100%",
  },
  content: {
    padding: "0 10px 0 10px",
  },
});

const Divider = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content}>{children}</span>
      <div className={classes.border} />
    </div>
  );
};

export default Divider;
