import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import Home from "../component/Home";
import About from "../component/About";
import Experience from "../component/Experience";
import Project from "../component/Project";
import Contact from "../component/Contact";

import Game from "../component/Game";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Home />
      <About />
      <Experience />
      <Project />
      <Game />
      <Contact />
    </>
  );
};

export default Main;
