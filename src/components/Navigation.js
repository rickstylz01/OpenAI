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
          Shopify-OpenAI
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="hungray"> Hungray </Nav.Link>
            <Nav.Link href="cover-letter"> Cover Letter </Nav.Link>
            <Nav.Link href="quotes"> Motivational Coach </Nav.Link>
            <Nav.Link href="#">Ricks Portfolio </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
