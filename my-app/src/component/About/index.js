import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import profile from "../../images/temppic.png";
import { Container, Header, Underline } from "../CommonElement";

var bgrsDesc = [
  "Significantly reduced input delay on pages with multiple form components",
  "Enhanced and developed various features onto the notification bell as well as the notification page",
  "Developed a feature to allow the website to be multilingual",
  "Implemented various new UX/UI designs onto existing features and components",
  "Altered multiple components throughout the website to be WCAG compliant",
  "Integrated Google Analytics onto multiple features to track feature usage and usefulness",
];

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
