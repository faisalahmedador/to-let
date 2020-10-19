import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";


const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        style={{
          background: "var(--darkGray)",
          position: '-webkit-sticky',
          position: "sticky",
          padding: "1rem 1.5rem",
          top:0
        }}
      >
        <Navbar.Brand href="#home" className='text-title'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ml-auto'>
            <NavDropdown title="Location"  className='mr-2'>
              <NavDropdown.Item href="#action/3.1">Dhaka</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Chittagong
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Khulna</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets" className='mr-2'>Log in</Nav.Link>
            <Nav.Link eventKey={2} className='mr-2' href="#memes" style={{background: "var(--primaryColor)", borderRadius: "5px 20px"}}>
              Submit An Add
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
