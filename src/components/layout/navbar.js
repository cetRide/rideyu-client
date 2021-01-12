import React from 'react';
import {Divider, Tooltip} from 'antd';
import {Link} from "react-router-dom";
import {FaRegBell} from "react-icons/fa";
import {BiCommentDots, BiSearch, BiMessageSquareError} from "react-icons/bi";
import {Avatar} from 'antd';
import {UserOutlined, SettingOutlined, LogoutOutlined, QuestionCircleOutlined} from '@ant-design/icons';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: 'rideyu.',
            displayModal: false,
            login: true,
            signup: true,
            isLoggedIn: true,
            isToggleOn: true,
            user: 'Cetric Okola'
        };
        this.openNav = this.openNav.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.closeNav = this.closeNav.bind(this);
        this.toggleNavAuthButtons = this.toggleNavAuthButtons.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
        console.log(this.state.isToggleOn)
        if (this.state.isToggleOn) {
            document.getElementById("sub-menu-id").style.width = "300px";
        } else {
            document.getElementById("sub-menu-id").style.width = "0";
        }
    }

    toggleNavAuthButtons() {
        const pathname = window.location.pathname
        if (pathname === '/auth/login') {
            this.setState({
                login: true,
                signup: false
            })
        } else if (pathname === '/auth/signup') {
            this.setState({
                login: false,
                signup: true
            })
        }
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
        const linkItems = <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Communities</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Bookings</Link></li>
            <li><Link to="/">Marketplace</Link></li>
            <li><Link to="/">Finances</Link></li>
        </div>
        const styleIcons = {
            marginRight: '8px'
        }
        return (
            <div>
                <div className="nav-bar">
                    <div className="horizontal-nav">
                        <div className="left-side">
                            <div className="nav-item-left nav-brand">
                                <Link to="/">{this.state.brand}</Link>
                            </div>
                        </div>
                        <div className="center-items">
                            <div className="nav-item-right">
                                {linkItems}
                            </div>
                        </div>
                        <div className="right-side">
                            {this.state.isLoggedIn ?
                                <div className="action-icons">
                                    <Tooltip placement="bottom" title="Search">
                                        <div><Link to="/"><BiSearch/></Link></div>
                                    </Tooltip>
                                    <Tooltip placement="bottom" title="Messaging">
                                        <div><Link to="/"><BiCommentDots/></Link></div>
                                    </Tooltip>
                                    <Tooltip placement="bottom" title="Notifications">
                                        <div><Link to="/"><FaRegBell/></Link></div>
                                    </Tooltip>
                                    <Tooltip placement="bottom" title="Me">
                                        <div>
                                            <Avatar onClick={this.handleClick} style={{cursor: 'pointer'}}
                                                    icon={<UserOutlined/>}/>
                                        </div>
                                    </Tooltip>
                                </div> :
                                <div className="action-buttons">
                                    {this.state.login &&
                                    <Link to="/auth/login" onClick={this.toggleNavAuthButtons} className="login-button">Log
                                        in</Link>}
                                    {this.state.signup &&
                                    <Link to="/auth/register" onClick={this.toggleNavAuthButtons}
                                          className="signup-button btn-primary">Sign
                                        up</Link>}
                                </div>
                            }
                        </div>
                        <div className="menu-icon">
                            <div className="icon" onClick={this.openNav}>
                                &#9776;
                            </div>
                        </div>
                    </div>
                    <div id="mySidenav" className="side-nav">
                        <div className="side-header">
                            <div className="logo">
                                <Link to="/">{this.state.brand}</Link>
                            </div>
                            <div className="close-btn" onClick={this.closeNav}>
                                &#10005;
                            </div>
                        </div>
                        <div className="links">
                            {linkItems}
                        </div>
                        <Divider/>
                    </div>
                    <div id="sub-menu-id" className="sub-menu">
                        <div className="menu-container">
                            <div className="head">
                                <div className="the-avatar">
                                    <Avatar icon={<UserOutlined/>}/>
                                </div>
                                <div>
                                    <h4>{this.state.user}</h4>
                                </div>
                            </div>
                            <Divider style={{margin: '8px 0'}}/>
                            <div className="contents">
                                <button className="btn btn-primary">View Profile</button>
                                <Divider style={{margin: '8px 0'}}/>
                                <p><SettingOutlined style={styleIcons}/>Settings and privacy</p>
                                <p><BiMessageSquareError style={styleIcons}/>Feedback</p>
                                <p><QuestionCircleOutlined style={styleIcons}/>Help Center</p>
                                <p><LogoutOutlined style={styleIcons}/>Sign Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar