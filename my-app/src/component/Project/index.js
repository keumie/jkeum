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
          <Image src={element} />
          <ImageText>
            <Text
              title="Element"
              tools="Unity, C#"
              description="Chemistry-based arcade game where the objective is to collect points to transform into different molecules and survive as long as possible to maximize your score."
              task="Developed various features such as player ability, enemy shooting patterns as well as the overall concept and design."
            />
          </ImageText>
        </ImageContainer>
        <ImageContainer>
          <Image src={website} />
          <ImageText>
            <Text
              title="Personal Website"
              tools="React, Javascript, HTML, CSS"
              description="A personal portfolio website to showcase my skillset for frontend development and market myself to the industry."
              task="Hosted on Github Pages, the website was created, designed, and developed from scratch."
            />
          </ImageText>
        </ImageContainer>
      </Grid>
    </Container>
  );
};

export default Project;
