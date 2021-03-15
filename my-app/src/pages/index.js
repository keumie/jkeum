import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import Home from "../component/Home";
import About from "../component/About";
import Experience from "../component/Experience";
import Project from "../component/Project";
import Contact from "../component/Contact";
import { Element } from "react-scroll";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Main;
