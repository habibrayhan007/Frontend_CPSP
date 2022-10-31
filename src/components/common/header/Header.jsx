import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import logo from "../header/cselogo.png";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar className='header' bg="light" expand="lg">
      <Container fluid className='nav-container'>
      <Link to ="/">
        <a className='nav-logo' href='#'>
          <img className='logo' src={logo} alt='My logo' />
        </a>
        </Link>
          
          <Nav>
            <NavDropdown className="navDropdown" title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="">Unverified</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
      </Container>
    </Navbar>
  )
}

export default Header;