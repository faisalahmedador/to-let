import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaLanguage, FaMapMarkerAlt } from "react-icons/fa";

const UpperHeader = () => {
  //title of language
  let title = "language";
  let icon = (
    <span>
      <FaLanguage /> {title}
    </span>
  );

  return (
    <>
      <Navbar bg="primary" className="nav-header">
        <Nav>
          <NavDropdown title={icon}>
            <NavDropdown.Item>Bangla</NavDropdown.Item>
            <NavDropdown.Item>English</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey="link-1">
            <span>
              locate your area <FaMapMarkerAlt />
            </span>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default UpperHeader;
