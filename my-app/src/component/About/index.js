import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import profile from "../../images/temppic.png";
import { Container, Header, Underline } from "../CommonElement";

const About = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header>about me</Header>
        <Underline />
      </Grid>
      <CustomCard logo={profile} />
    </Container>
  );
};

export default About;
