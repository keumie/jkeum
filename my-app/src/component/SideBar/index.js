import React from "react";
import { SidebarContainer, Icon, CloseIcon } from "./SideBarElement";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Duscover</SidebarLink>
          <SidebarLink to="Services">Services</SidebarLink>
          <SidebarLink to="game">Game</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
