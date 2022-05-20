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
          <Nav.Link href="/">
            <img src={logo} alt="custom logo" width="50px" />
            Shopify-OpenAI
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#">Ricks Portfolio 🏆</Nav.Link>
            <Nav.Link href="hungray"> Hungray 🍔 </Nav.Link>
            <Nav.Link href="quotes"> Quotes “✌” </Nav.Link>
            <Nav.Link href="breaknames"> BreakNames 🤸 </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
