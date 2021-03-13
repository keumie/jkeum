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
          about me
        </SidebarLink>
        <SidebarLink to="discover" onClick={props.toggle}>
          experience
        </SidebarLink>
        <SidebarLink to="projects" onClick={props.toggle}>
          projects
        </SidebarLink>
        <SidebarLink to="game" onClick={props.toggle}>
          contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
