import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import profile from "../../images/ppic.jpg";
import { Container, Header, Underline } from "../CommonElement";

const About = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header data-aos="fade-right">about me</Header>
        <Underline data-aos="fade-left" />
      </Grid>
      <CustomCard logo={profile} />
    </Container>
  );
};

export default About;
