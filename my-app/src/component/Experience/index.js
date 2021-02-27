import React from "react";
import { Grid } from "@material-ui/core";
import bgrslogo from "../../images/bgrslogo.jpg";
import atologo from "../../images/atologo.jpg";
import rbhlogo from "../../images/rbhlogo.png";
import wmlogo from "../../images/wmlogo.jpg";
import {
  ExperienceContainer,
  ExperienceHeader,
  ExperienceLogo,
  EInfoTitle,
  EInfoSub,
  ExperienceInfoContainer,
} from "./ExperienceElement";

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceHeader>experience</ExperienceHeader>
      <Grid container>
        <Grid item xs={6} container justify="flex-end">
          <ExperienceLogo src={bgrslogo} />
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <EInfoTitle>Software Developer</EInfoTitle>
          <EInfoSub>Internship</EInfoSub>
          <Grid>Some Description</Grid>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <EInfoTitle>Software Developer</EInfoTitle>
          <EInfoSub>Internship</EInfoSub>
          <Grid>Some Description</Grid>
        </Grid>
        <Grid item xs={6} container justify="flex-start">
          <ExperienceLogo src={atologo} />
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <ExperienceLogo src={rbhlogo} />
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <EInfoTitle>Software Developer</EInfoTitle>
          <EInfoSub>Internship</EInfoSub>
          <Grid>Some Description</Grid>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <EInfoTitle>Software Developer</EInfoTitle>
          <EInfoSub>Internship</EInfoSub>
          <Grid>Some Description</Grid>
        </Grid>
        <Grid item xs={6} container justify="flex-start">
          <ExperienceLogo src={wmlogo} />
        </Grid>
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
