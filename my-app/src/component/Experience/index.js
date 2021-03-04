import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import bgrslogo from "../../images/bgrslogo.jpg";
import atologo from "../../images/atologo.jpg";
import rbhlogo from "../../images/rbhlogo.png";
import wmlogo from "../../images/wmlogo.jpg";
import tbgrslogo from "../../images/transpbgrslogo.png";
import tatologo from "../../images/transpatologo.png";
import trbhlogo from "../../images/transprbhlogo.png";
import twmlogo from "../../images/transpwmlogo.png";
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
          <CustomCard
            logo={tbgrslogo}
            overline={"SEPT 2019  ~  DEC 2019  ||  JAN 2019  ~  APR 2019"}
            heading={"BGRS"}
            title={"Software Developer"}
            body={"asd"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={tatologo}
            overline={"MAY 2018  ~  AUG 2018"}
            heading={"Appliance TV Outlet"}
            title={"Web Developer"}
            body={"asd"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={trbhlogo}
            overline={"JAN 2015  ~  APR 2015"}
            heading={"Rothman Bension & Hedges"}
            title={"Application Developer"}
            body={"asd"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={twmlogo}
            overline={"JAN 2014  ~  APR 2014"}
            heading={"Work Market"}
            title={"Mobile Developer"}
            body={"asd"}
          />
        </Grid>
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
