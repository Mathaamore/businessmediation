import React from "react";
import { FaBars } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../images/emlyon_logo_seul2_rvb.png";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavLogoImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={true}>
          <NavBarContainer>
            <NavLogo to="/">
              <NavLogoImg onClick={toggleHome} src={Logo} />
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars style={{ color: "inherit" }} />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/">Accueil</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/schools">Nos écoles</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects">Nos projets</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/alumni">Nos alumni</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/map">
                  <FaGlobeEurope style={{ color: "inherit" }} />
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
