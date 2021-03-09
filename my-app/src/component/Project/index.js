import React from "react";
import Grid from "@material-ui/core/Grid";
import website from "../../images/website.png";
import element from "../../images/element.png";
import Text from "./Text";
import { Container, Header, Underline } from "../CommonElement";
import { ImageContainer, Image, ImageText } from "./ProjectElement";

const Project = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header>projects</Header>
        <Underline />
      </Grid>
      <Grid container justify="space-evenly" alignItems="center">
        <ImageContainer>
          {/* <Image src={element} /> */}
          <ImageText>
            <Text />
          </ImageText>
        </ImageContainer>
        <ImageContainer>
          <Image src={website} />
          <ImageText>bye</ImageText>
        </ImageContainer>
      </Grid>
    </Container>
  );
};

export default Project;
