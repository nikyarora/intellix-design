import React from 'react';
 
import { Navbar, Nav, Container } from 'react-bootstrap';
import intellix from "../images/assets/intellix.svg"
 
const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
        <img
          alt=""
          src={intellix}
          width="45"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Intellix Design
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}
 
export default Navigation;
