import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import profile from "../../images/temppic.png";
import {
  Container,
  Header,
  Underline,
  FadeLeft,
  FadeRight,
} from "../CommonElement";

const About = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <FadeLeft>
          <Header>about me</Header>
        </FadeLeft>
        <FadeRight>
          <Underline />
        </FadeRight>
      </Grid>
      <CustomCard logo={profile} />
    </Container>
  );
};

export default About;
