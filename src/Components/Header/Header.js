import React, {useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import * as Auth from "../../helpers/auths";
import {Link, useHistory} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import "./_header.scss";
import AddModal from "../AddModal/AddModal";
import {useDispatch, useSelector} from "react-redux";
import {logout, signinAction} from "../../redux/Actions/SigninActions";
import {Redirect, useLocation} from "react-router-dom";
import {ScrollControl} from "../../Shared/customHooks";
import {removeUserId, removeUserToken} from "../../helpers/localStorer";

const Header = () => {
    const [show, setShow] = useState(false);
    const [validUser, setValidUser] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setValidUser(Auth.validAdmin());
    },[location])

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(signinAction("logged_out"));
    };
    const {logged_out} = useSelector((state) => state.signinReducer);
    const {loading, add_post} = useSelector(state => state.adsubmitReducers);

    const history = useHistory();
    useEffect(() => {
        if(logged_out) {
            removeUserToken();
            removeUserId();
            setValidUser(Auth.validAdmin());
            // history.push('/');
        }
        if (add_post) {
            setShow(false);
            history.push('/userAds');
        }
    }, [add_post, logged_out]);


    const {position, shadow} = ScrollControl();
    console.log(position, shadow);

    function openSubmitModal() {
        setShow(true);
    }

    return (<section className="header-div-main" style={{position: "relative"}}>
            <div
                className={shadow ? "header-div header-div--floating" : "header-div header-div--hero "}
                style={{position}}
            >
                <Navbar collapseOnSelect expand="md" className="header-div--nav-bar">
                    <Link to="/" className="logo-div">
                        LOGO
                    </Link>

                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto nav-elements">
                                {!validUser ? <>
                                    <Link to="/login" className={'btn btn-primary button-default-style mr-3'}>
                                        Login/Signup
                                    </Link>
                                    <Link
                                        className="btn btn-primary disabled button-default-style"
                                        disabled
                                    >
                                        Submit an Add
                                    </Link>
                                </> : <>
                                    <Link
                                        className="btn btn-primary button-default-style mr-3"
                                        onClick={() => openSubmitModal()}
                                    >
                                        Submit an Add
                                    </Link>

                                    <NavDropdown
                                        title={<CgProfile style={{fontSize: "large"}}/>}
                                        id="collasible-nav-dropdown"
                                        className='btn btn-primary button-default-style p-0'
                                    >
                                        <Link to={"/profile/" + "2"}
                                              className={'dropdown-item-style'}>
                                            Name
                                        </Link>
                                        <Link to='/userAds' className={'dropdown-item-style'}>
                                            Posted Ads
                                        </Link>
                                        <Link onClick={() => handleLogout()}
                                              className={'dropdown-item-style'}>
                                            Logout
                                        </Link>

                                    </NavDropdown>
                                </>}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

                {/* {validUser && show ? (
          <AddModal show={show} setShow={setShow} />
        ) : (
          <Redirect to="/login" />
        )} */}

                {show ? (validUser ? (<AddModal
                            show={show}
                            setShow={setShow}
                        />) : (<Redirect to={{pathname: "/login", state: {msg: true}}}/>)) : ("")}
            </div>
        </section>);
};
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;
