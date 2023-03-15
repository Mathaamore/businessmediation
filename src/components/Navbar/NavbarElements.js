import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  height: inherit;
`;

export const NavLogoImg = styled.img`
  cursor: pointer;

  padding: 10px;

  justify-self: flex-start;
  display: flex;
  align-items: center;
  height: inherit;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 32px;
    cursor: pointer;
    color: #010101;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.ul`
  height: 60px;
`;

export const NavLinks = styled(LinkR)`
  color: #010101;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #e2001a;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e2001a;
  }
`;

export const NavIcons = styled.a`
  color: #010101;
  font-size: 24px;
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 30px;
  height: 100%;

  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010101;
  font-size: 16px;
  /* outline: none;
    border: none; */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: solid;
  border-width: 2px;
  border-color: #000;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;
