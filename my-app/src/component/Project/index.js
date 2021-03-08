import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import website from "../../images/website.png";
import element from "../../images/element.png";
import { Container, Header, Underline } from "../CommonElement";
import { Image } from "./ProjectElement";

const Project = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header>projects</Header>
        <Underline />
      </Grid>
      <Grid container justify="space-evenly" alignItems="center">
        <Image src={element} />
        <Image src={website} />
      </Grid>
    </Container>
  );
};

export default Project;
