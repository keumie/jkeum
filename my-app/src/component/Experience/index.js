import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import bgrslogo from "../../images/bgrslogo.jpg";
import atologo from "../../images/atologo.jpg";
import rbhlogo from "../../images/rbhlogo.png";
import wmlogo from "../../images/wmlogo.jpg";
import { withStyles } from "@material-ui/core/styles";
import ExperienceModal from "./ExperienceModal";
import Button from "@material-ui/core/Button";
import CustomCard from "./CustomCard";
import {
  ExperienceContainer,
  ExperienceHeader,
  ExperienceLogo,
  EInfoTitle,
  EInfoSub,
  EInfoDesc,
} from "./ExperienceElement";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "orange",
  },
}))(Button);

const Experience = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ExperienceContainer>
      <ExperienceHeader>experience</ExperienceHeader>
      <CustomCard />
      <ColorButton onClick={handleClickOpen}>Open dialog</ColorButton>
      <ExperienceModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
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
