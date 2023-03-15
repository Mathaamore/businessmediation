import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Accueil
          </SidebarLink>
          <SidebarLink to="/schools" onClick={toggle}>
            Nos écoles
          </SidebarLink>
          <SidebarLink to="/projects" onClick={toggle}>
            Nos projets
          </SidebarLink>
          <SidebarLink to="/alumni" onClick={toggle}>
            Nos alumni
          </SidebarLink>
          <SidebarLink to="/map" onClick={toggle}>
            Carte des alumni
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
