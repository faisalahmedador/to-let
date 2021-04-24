import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { useCallback } from "react";
import { connect } from "react-redux";
import { setShadow, setPosition } from "../../redux/Actions/HeaderActions";
import * as Auth from "../../helpers/auths";
import { Link } from "react-router-dom";
import "./_header.scss";

const mapStateToProps = (state) => {
  //console.log(state.position);
  return {
    position: state.Header.position,
    shadow: state.Header.shadow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSetposition: (text) => {
    dispatch(setPosition(text));
  },
  onSetShadow: (text) => {
    dispatch(setShadow(text));
  },
});

const Header = ({ onSetposition, position, onSetShadow, shadow }) => {
  // const [shadow, setShadow] = useState(false);
  // const [position, setposition] = useState("absolute");

  const handleScroll = useCallback(() => {
    if (window.scrollY < 76) {
      onSetposition("absolute");
      onSetShadow("false");
    }
    // else if (window.scrollY > 76 && window.scrollY < 689) {
    //   onSetShadow("false");
    //   onSetposition("fixed");
    // }
    else if (window.scrollY > 36) {
      onSetShadow("true");
      onSetposition("fixed");
    }
  }, [onSetShadow, onSetposition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="header-div-main" style={{ position: "relative" }}>
      <div
        className={
          shadow === "true"
            ? "header-div header-div--floating"
            : "header-div header-div--hero "
        }
        style={{ position }}
      >
        <Navbar collapseOnSelect expand="md" className="header-div--nav-bar">
          <Navbar.Brand href="/" className="logo-div">
            LOGO
          </Navbar.Brand>

          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto nav-elements">

                {/* <NavDropdown title="Location" className="drop-location">
                  <NavDropdown.Item href="#action/3.1">Dhaka</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Chittagong
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Khulna</NavDropdown.Item>
                </NavDropdown> */}

                <Nav.Link href="#deets" className="login">
                  Log in
                </Nav.Link>
                <Nav.Link href="/submitads" className="add-submit">
                  Submit An Add
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        {/* <div class="navbar navbar-expand-lg navbar-light bg-light header-div--nav-bar">
          <Link class="navbar-brand" to="/" className="logo-div">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto nav-elements">
              <li class="nav-item">
                <Link class="nav-link add-submit" to="/submitads">
                  Submit an add
                </Link>
              </li>
              {Auth.validAdmin() ? (
                <Link to="/" className="login nav-link">
                  Faisal Ahmed
                </Link>
              ) : (
                <Link to="/" className="login nav-link">
                  login
                </Link>
              )}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
