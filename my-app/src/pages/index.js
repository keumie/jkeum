import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import Home from "../component/Home";

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
    </>
  );
};

export default Main;
