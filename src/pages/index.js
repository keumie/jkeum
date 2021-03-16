import React, { useState, useEffect } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import Home from "../component/Home";
import About from "../component/About";
import Experience from "../component/Experience";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

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
      <Footer />
    </>
  );
};

export default Main;
