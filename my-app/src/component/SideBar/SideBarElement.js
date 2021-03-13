import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  display: grid;

  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  transition: 0.3s ease-in-out;
  z-index: 20;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  background: transparent;
  top: 1.5rem;
  right: 1.5rem;
  outline: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  justify-content: center;
  text-align: center;
  grid-template-rows: repeat(6, 80px);
  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  font-size: 1.5rem;
  text-decoration: none;
  transistion: 0.2 ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: orange;
    transition: 0.2s ease-in-out;
  }
`;
