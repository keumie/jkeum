import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SideBarElement";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <CloseIcon />
      <SidebarMenu>
        <SidebarLink to="about" onClick={props.toggle}>
          About
        </SidebarLink>
        <SidebarLink to="discover" onClick={props.toggle}>
          Discover
        </SidebarLink>
        <SidebarLink to="projects" onClick={props.toggle}>
          Projects
        </SidebarLink>
        <SidebarLink to="game" onClick={props.toggle}>
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
