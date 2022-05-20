import logo from '../logo.png'
import React from "react";
import {Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="custom logo" width="50px" />
          Hungray
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#">Ricks Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
