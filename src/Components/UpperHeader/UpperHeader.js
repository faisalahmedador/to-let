import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaLanguage, FaMapMarkerAlt } from "react-icons/fa";
import VidModal from '../VidModal/VidModal';
import "./_upperheader.scss";

const UpperHeader = () => {
  //title of language
  let title = "language";
  let icon = (
    <span  >
      <FaLanguage  /> {title}
    </span>
  );

  return (
    <div className="nav-header-div">
      <nav className="navbar navbar-expand-lg  bg-light nav-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <a  href="#">
          <span style={{ color: 'white' }} >
            locate your area <FaMapMarkerAlt />
          </span>
        </a>

        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: 'white'  }}
        >
          {icon}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">
            Bangla
          </a>
          <a class="dropdown-item" href="#">
            English
          </a>
        </div>
        </div>

        <VidModal/>
      </nav>
    </div>
  );
};
export default UpperHeader;
