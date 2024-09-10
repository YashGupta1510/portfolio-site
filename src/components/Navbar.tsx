// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  position: sticky;
  width: 100%;
  height: 10vh;
  background-color: #0b0c10 ;
  background-color:transparent;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

   @media (max-width: 720px) {
    position: sticky;
    flex-direction: column;
    height:15vh;
    margin-right:0px;
    justify-content: space-evenly;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 40px;
  color: #66fcf1;
  margin-right: 20px; 
`;



export const Navbar = () => {
  return (
    <NavbarWrapper>
      <h1>Portfolio</h1>
      <NavLinks>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </NavLinks>
    </NavbarWrapper>
  );
};
