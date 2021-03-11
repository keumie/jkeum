import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container, Header, Underline } from "../CommonElement";
import Form from "./form";

const Contact = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header>contact</Header>
        <Underline />
      </Grid>
      <Form />
    </Container>
  );
};

export default Contact;
