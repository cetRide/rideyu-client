import React from 'react';
import {Divider} from 'antd';
import {Link} from "react-router-dom";


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {displayModal: false};
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    open() {
        document.getElementById('icon').classList.toggle("open");
    }

    openNav() {
        document.getElementById("mySidenav").style.width = window.screen.width + "px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="left-items">
                            <div className="nav-item logo">
                                rideyu.
                            </div>
                        </div>

                        <div className="right-items">
                            <div className="menu">
                                <ul className="nav-item">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Our Work</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                                <div className="buttons">
                                    <Link className="login-button" to="/auth/login">
                                        Log in</Link>
                                    <Link className="button signup-button btn-primary" to="/auth/register">Sign
                                        up</Link>
                                </div>
                            </div>
                            <div className="menu-icon">
                                <div className="icon" onClick={this.openNav}>
                                    &#9776;
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mySidenav" className="sidenav">
                        <div className="side-header">
                            <div className="logo">
                                rideyu.
                            </div>
                            <div className="close-btn" onClick={this.closeNav}>
                                &times;
                            </div>
                        </div>
                        <div className="links">
                            <a href="/">Home</a>
                            <a href="/">About Us</a>
                            <a href="/">Our Work</a>
                            <a href="/">Contact Us</a>
                        </div>
                        <Divider/>
                        <div className="buttons buton">
                            <a href="/" className="login-button">Log in</a>
                            <a href="/" className="button signup-button btn-primary">Sign up</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar