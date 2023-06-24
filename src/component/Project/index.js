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
        <Header data-aos="fade-right">projects</Header>
        <Underline data-aos="fade-left" />
      </Grid>
      <Grid container justify="space-evenly" alignItems="center">
        <ImageContainer data-aos="flip-right">
          <Image src={element} />
          <ImageText>
            <Text
              title="Element"
              tools="Unity, C#"
              description="Chemistry-based arcade game where the objective is to collect points to transform into different molecules and survive as long as possible to maximize your score."
              task="Developed various features such as player ability, enemy shooting patterns as well as the overall concept and design."
              github="https://github.com/antu3199/ElementGame"
              link="https://play.google.com/store/apps/details?id=com.Puzzle.Element"
            />
          </ImageText>
        </ImageContainer>
        <ImageContainer data-aos="flip-left">
          <Image src={website} />
          <ImageText>
            <Text
              title="Personal Website"
              tools="React, Javascript, HTML, CSS"
              description="Developed a personal portfolio website using React, JavaScript, HTML, and CSS, showcasing skills and projects."
              task="Hosted on GitHub Pages. Designed an intuitive user interface, incorporated responsive design principles, and optimized performance"
              github="https://github.com/keumie/jkeum"
              link="https://www.jkeum.net"
            />
          </ImageText>
        </ImageContainer>
      </Grid>
    </Container>
  );
};

export default Project;
