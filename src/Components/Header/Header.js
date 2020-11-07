import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
       if (window.pageYOffset > 80 && window.pageYOffset < 689) {
        setShadow(false);
      } else {
        setShadow(true);
      }
      //console.log(window.pageYOffset, shadow);
    });
  });

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        id={shadow ? "floating-nav-header" : "nav-header"}
      >
        <Navbar.Brand href="#home" className="text-title">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav-elements">
            <NavDropdown title="Location" className="drop-location">
              <NavDropdown.Item href="#action/3.1">Dhaka</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chittagong</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Khulna</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets" className="login">
              Log in
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="add-submit">
              Submit An Add
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
