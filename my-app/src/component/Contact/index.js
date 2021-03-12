import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container, Header, Underline } from "../CommonElement";
import Form from "./Form";
import Link from "./Link";
import Divider from "./Divider";
import { ContactContainer } from "./ContactElement";

const Contact = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header>contact</Header>
        <Underline />
      </Grid>
      <ContactContainer>
        <Grid container direction="column" justify="space-evenly" spacing={5}>
          <Grid item>
            <Link />
          </Grid>
          <Divider>OR</Divider>
          <Grid item>
            <Form />
          </Grid>
        </Grid>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
