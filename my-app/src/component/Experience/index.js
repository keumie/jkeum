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
  EInfoDesc,
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
          <EInfoDesc>React, Redux, Javascript, HTML, CSS</EInfoDesc>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <EInfoTitle>Web Developer</EInfoTitle>
          <EInfoSub>Internship</EInfoSub>
          <EInfoDesc>Javascript, HTML, CSS, Magento</EInfoDesc>
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
          <EInfoTitle>Application Developer</EInfoTitle>
          <EInfoSub>Internship</EInfoSub>
          <EInfoDesc>Java, Business Object, Excel </EInfoDesc>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <EInfoTitle>Mobile Developer</EInfoTitle>
          <EInfoSub>Internship</EInfoSub>
          <EInfoDesc>jQuery, Javascript, HTML, CSS</EInfoDesc>
        </Grid>
        <Grid item xs={6} container justify="flex-start">
          <ExperienceLogo src={wmlogo} />
        </Grid>
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
