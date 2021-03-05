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

  var bgrsDesc = [
    "Significantly reduced input delay on pages with multiple form components",
    "Enhanced and developed various features onto the notification bell as well as the notification page",
    "Developed a feature to allow the website to be multilingual",
    "Implemented various new UX/UI designs onto existing features and components",
    "Altered multiple components throughout the website to be WCAG compliant",
    "Integrated Google Analytics onto multiple features to track feature usage and usefulness",
  ];

  var atoDesc = [
    "Implemented new UX/UI design to improve the current website's flow and readability",
    "Developed various features throughout the website, such as item preview, contact-us form and newsletter",
    "Investigated and resolved various outstanding backlogged bugs within the codebase",
  ];

  var rbhDesc = [
    "Built various features onto the internal applications and debugged for bugs that arose",
    "Worked alongside the financial department to automate financial reports that were due annually",
    "Overlooked the ETL process for any errors or failures and came up with solutions if needed",
  ];

  var wmDesc = [
    "Discovered and fixed a major security bug within the application that allowed any user to access a stranger comment section despite being blocked or not being friends with the user",
    "Optimized multiple different views to help improve performance and stability",
    "Implemented the feature to view external documents directly on the mobile application",
    "Developed the ability to allow for direct document downloads from the application instead of redirecting to a web application",
    "Integrated new UX/UI to multiple different views to better fit the overall theme of the application",
  ];

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
            desc={bgrsDesc}
            location={"Toronto ON"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={tatologo}
            overline={"MAY 2018  ~  AUG 2018"}
            heading={"Appliance TV Outlet"}
            title={"Web Developer"}
            body={"asd"}
            desc={atoDesc}
            location={"Mississauga ON"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={trbhlogo}
            overline={"JAN 2015  ~  APR 2015"}
            heading={"Rothman Bension & Hedges"}
            title={"Application Developer"}
            body={"asd"}
            desc={rbhDesc}
            location={"Toronto ON"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={twmlogo}
            overline={"JAN 2014  ~  APR 2014"}
            heading={"Work Market"}
            title={"Mobile Developer"}
            body={"asd"}
            desc={wmDesc}
            location={"Manhattan NY"}
          />
        </Grid>
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
