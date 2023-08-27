import React from "react";
import {Navbar, Nav} from 'react-bootstrap'

const MyNavbar = () => {

  return (
    <Navbar bg="light" expand="lg" sticky="top">
    {/* <Navbar.Brand href="#home" className="mx-2"><span className="nav-brand">RS</span></Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav ml-auto mx-auto text-center navbar-links js-scroll-trigger" >
        <Nav.Link href="/#home" className="js-scroll-trigger">Home</Nav.Link>
        <Nav.Link href="/#about" className="js-scroll-trigger">About</Nav.Link>
        <Nav.Link href="/#services" className="js-scroll-trigger">Services</Nav.Link>
        <Nav.Link href="/#contact" className="js-scroll-trigger">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
export default MyNavbar
