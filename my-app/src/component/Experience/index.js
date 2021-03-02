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
      <ColorButton onClick={handleClickOpen}>Open dialog</ColorButton>
      <ExperienceModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomCard />
        </Grid>
        <Grid item xs={12}>
          <CustomCard />
        </Grid>
        <Grid item xs={12}>
          <CustomCard />
        </Grid>
        <Grid item xs={12}>
          <CustomCard />
        </Grid>
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
