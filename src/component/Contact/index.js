import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container, Header, Underline } from "../CommonElement";
import Forms from "./Forms";
import Social from "./Social";
import Divider from "./Divider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  container: {
    borderRadius: "16px",
    boxShadow: "5px 5px 50px 5px rgba(0, 0, 0)",
    padding: "30px",
    background: "white",
    margin: "auto",
    width: "50%",
  },
  button: {
    width: "100%",
    padding: "60px 0px",
    color: "white",
    fontSize: "20px",
    "&:hover": {
      background: "none",
    },
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Container
      style={{
        height: "100vh",
      }}
    >
      <Grid container direction="column" justify="center" alignItems="center">
        <Header data-aos="fade-left">contact</Header>
        <Underline data-aos="fade-right" />
      </Grid>
      <div data-aos="flip-right" className={classes.container}>
        <Grid container direction="column" justify="space-evenly" spacing={5}>
          <Grid item>
            <Social />
          </Grid>
          <Divider>OR</Divider>
          <Grid item>
            <Forms />
          </Grid>
        </Grid>
      </div>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={700}
        offset={-80}
      >
        <Button
          className={classes.button}
          disableRipple
          data-aos="zoom-in-right"
        >
          Back To Top
        </Button>
      </Link>
    </Container>
  );
};

export default Contact;
