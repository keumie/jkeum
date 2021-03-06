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
        <Header>about</Header>
        <Underline />
      </Grid>
      <CustomCard
        logo={profile}
        overline={"SEPT 2019  ~  DEC 2019  ||  JAN 2019  ~  APR 2019"}
        heading={"BGRS"}
        title={"Software Developer"}
        body={"asd"}
        desc={bgrsDesc}
        location={"Toronto ON"}
      />
    </Container>
  );
};

export default About;
