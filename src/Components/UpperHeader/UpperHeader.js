import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaLanguage,FaMapMarkerAlt } from "react-icons/fa";



const UpperHeader = () => {
  //title of language
  let title = 'language'
  let icon = <span><FaLanguage /> {title}</span>
  
  return (
    <>
      <Nav style={{background: 'orange'}}>
      
      <NavDropdown title={icon}  id="nav-dropdown" >
        <NavDropdown.Item >Bangla</NavDropdown.Item>
        <NavDropdown.Item >English</NavDropdown.Item>
      </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><span>locate your area <FaMapMarkerAlt/></span></Nav.Link>
        </Nav.Item>
        
      </Nav>
    </>
  );
};
export default UpperHeader;
