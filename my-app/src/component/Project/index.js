import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container, Header, Underline } from "../CommonElement";

const Project = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header>projects</Header>
        <Underline />
      </Grid>
    </Container>
  );
};

export default Project;
