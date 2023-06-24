import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ttreadlogo from "../../images/transptreadlogo.png";
import tbgrslogo from "../../images/transpbgrslogo.png";
import tatologo from "../../images/transpatologo.png";
import trbhlogo from "../../images/transprbhlogo.png";
import twmlogo from "../../images/transpwmlogo.png";
import CustomCard from "./CustomCard";
import { Container, Header, Underline } from "../CommonElement";

const useStyles = makeStyles({
  root: {
    padding: "0px 35px",
  },
});

const Experience = () => {
  const classes = useStyles();

  var treadDesc = [
    "Significantly dropped the render speed by 90% for a drag-and-drop driver scheduler from 3.1 seconds per action down to 0.3 seconds per action implementing strategies such as virtualization and optimistic rendering, resulting in a more responsive user interface.",
    "Using Apollo GraphQL, strategized and executed a solution to continuously lazy load bulk page data to improve user experience and performance.",
    "Led the development of an experimental feature addressing a client's main concern, resulting in an 11% increase in platform usage.",
    "Advocated, compiled, and implemented overdue frontend technical debt which boosted productivity, increased maintainability, and reduced the chances of errors.",
    "Collaborated with UX/UI designers, project managers, and other engineers to deliver solutions and features.",
  ];

  var bgrsDesc = [
    "Significantly reduced input delay by 84% on pages with multiple form components from an average of 1.2 seconds per keystroke to 0.2 seconds per keystroke utilizing strategies such as debouncing.",
    "Integrated Google Analytics into the ecosystem and designed an infrastructure to allow seamless hookups for future products and features.",
    "Restructured the website to align with accessibility guidelines and meet all the requirements to be WCAG compliant.",
    "Incorporated new UX/UI design into new and existing features and components throughout the platform.",
    "Developed and debugged numerous features throughout the platform such as a notification, multilingual support, and various custom pages unique to the platform.",
  ];

  var atoDesc = [
    "Designed and implemented new UX/UI to improve the current website's flow and readability.",
    "Developed various features throughout the website, such as item preview, contact-us form, and newsletter.",
  ];

  // var rbhDesc = [
  //   "Built various features onto the internal applications and debugged for bugs that arose",
  //   "Worked alongside the financial department to automate financial reports that were due annually",
  //   "Overlooked the ETL process for any errors or failures and came up with solutions if needed",
  // ];

  // var wmDesc = [
  //   "Discovered and fixed a major security bug within the application that allowed any user to access a stranger comment section despite being blocked or not being friends with the user",
  //   "Optimized multiple different views to help improve performance and stability",
  //   "Implemented the feature to view external documents directly on the mobile application",
  //   "Developed the ability to allow for direct document downloads from the application instead of redirecting to a web application",
  //   "Integrated new UX/UI to multiple different views to better fit the overall theme of the application",
  // ];

  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Header data-aos="fade-left">experience</Header>
        <Underline data-aos="fade-right" />
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <CustomCard
            logo={ttreadlogo}
            date={"JULY 2021  ~  MAR 2023"}
            heading={"Tread"}
            title={"Software Engineer"}
            desc={treadDesc}
            location={"Toronto, ON"}
            tool={
              "Tools: React.js, Typescript, GraphQL, HTML, CSS, Go, PostgreSQL"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={tbgrslogo}
            date={"SEPT 2019  ~  DEC 2019  ||  JAN 2019  ~  APR 2019"}
            heading={"BGRS"}
            title={"Software Developer (Co-op)"}
            desc={bgrsDesc}
            location={"Toronto, ON"}
            tool={"Tools: React.js, Redux, Javascript, HTML, CSS, Node.js"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={tatologo}
            date={"MAY 2018  ~  AUG 2018"}
            heading={"Appliance TV Outlet"}
            title={"Web Developer (Co-op)"}
            desc={atoDesc}
            location={"Mississauga, ON"}
            tool={"Tools: HTML, CSS, PHP, Javascript"}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <CustomCard
            logo={trbhlogo}
            date={"JAN 2015  ~  APR 2015"}
            heading={"Rothman Bension & Hedges"}
            title={"Application Developer (Co-op)"}
            desc={rbhDesc}
            location={"Toronto ON"}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCard
            logo={twmlogo}
            date={"JAN 2014  ~  APR 2014"}
            heading={"Work Market"}
            title={"Mobile Developer (Co-op)"}
            desc={wmDesc}
            location={"Manhattan NY"}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Experience;
