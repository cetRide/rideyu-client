import React from 'react';
import {Link} from "react-router-dom";
import {BsCompass, BsChatDots, BsBriefcase} from "react-icons/bs";
import {FiUsers, FiBell} from "react-icons/fi";
import {
    BiSearch,
    BiMessageSquareError,
    BiMenu,
    BiHomeAlt
} from "react-icons/bi";
import {SettingOutlined, LogoutOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: 'rideyu.',
            login: true,
            signup: true,
            isLoggedIn: true,
            isToggleOn: false,
            visible: false,
            user: 'Cetric Okola',
        };
        this.handleClick = this.handleClick.bind(this)
        this.toggleNavAuthButtons = this.toggleNavAuthButtons.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    closeOvelay = () => {
        this.setState({
            isToggleOn: false
        })
    }
    closeDrawer = () => {
        this.setState({
            visible: false,
        })
    }
    handleDrawer = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible,
        }))
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

    render() {
        const styleIcons = {
            marginRight: '10px'
        }
        return (
            <div>
                {this.state.overlay &&
                <div className="overlay" onClick={this.closeDrawer}/>}
                {this.state.isToggleOn &&
                <div className="overlay2" onClick={this.closeOvelay}/>}
                <div className="nav-bar">
                    <div className="horizontal-nav">
                        <div className="left-side">
                            <div className="nav-item-left nav-brand">
                                <Link to="/">{this.state.brand}</Link>
                            </div>
                            <Link
                                to="/search">
                                <div id="search-button" className="search-box">
                                    <BiSearch className="search-icon"/> <span>Search rideyu.</span>
                                </div>
                            </Link>
                        </div>
                        <div className="right-side">

                            <div className="items2">
                                {this.state.isLoggedIn ?
                                    <div className="user-icons">
                                        <div className="action-icons">

                                            <div className="tooltip bottom" data-tooltip="Home"><Link
                                                to="/"><BiHomeAlt/></Link></div>
                                            <div className="tooltip bottom" data-tooltip="Communities"><Link
                                                to="/"><FiUsers/></Link></div>
                                            <div className="tooltip bottom" data-tooltip="Discover"><Link
                                                to="/"><BsCompass/></Link></div>
                                            <div className="tooltip bottom" data-tooltip="Jobs"><Link
                                                to="/"><BsBriefcase/></Link></div>

                                            <div className="tooltip bottom" data-tooltip="Messaging"><Link
                                                to="/"><BsChatDots/></Link></div>
                                            <div className="tooltip bottom" data-tooltip="Notifications"><Link
                                                to="/"><FiBell/></Link></div>
                                        </div>
                                        <div className="the-avatar">
                                            <FontAwesomeIcon onClick={this.handleClick}
                                                             style={{cursor: 'pointer', marginRight: '20px'}}
                                                             className="avatar-icon" icon={faUserCircle}/>
                                        </div>
                                    </div> :
                                    <div className="action-buttons">
                                        {this.state.login &&
                                        <Link to="/auth/login" onClick={this.toggleNavAuthButtons}
                                              className="login-button">Log
                                            in</Link>}
                                        {this.state.signup &&
                                        <Link to="/auth/register" onClick={this.toggleNavAuthButtons}
                                              className="signup-button btn-primary">Sign
                                            up</Link>}
                                    </div>
                                }
                            </div>
                        </div>

                        <div style={{display: this.state.isToggleOn ? 'block' : 'none'}} className="sub-menu">
                            <div className="menu-container">
                                <div className="head">
                                    <div className="the-avatar">
                                        <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                    </div>
                                    <div>
                                        <h4>{this.state.user}</h4>
                                    </div>
                                </div>
                                <div style={{margin: '8px 0'}} className="line-divider"/>
                                <div className="contents">
                                    <button className="btn btn-primary">View Profile</button>
                                    <p><SettingOutlined style={styleIcons}/>Settings and privacy</p>
                                    <p><BiMessageSquareError style={styleIcons}/>Feedback</p>
                                    <p><QuestionCircleOutlined style={styleIcons}/>Help Center</p>
                                    <p><LogoutOutlined style={styleIcons}/>Sign Out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: this.state.visible ? 'block' : 'none'}} id="bottom-drawer"
                         className="bottom-drawer-menu">
                        <div onClick={this.closeDrawer} className="close-btn">&#10005;</div>
                        <div className="contents">
                            <p>#home</p>
                            <p>#communities</p>
                            <p>#locate services</p>
                            <p>#hire a ride</p>
                            <p>#jobs</p>
                            <p>#bookings</p>
                            <p>#marketplace</p>
                            <p>#find dealers</p>
                            <p>#finances</p>
                            <p>#my garage</p>
                            <p>#questions & answers</p>
                            <p>#companies</p>

                        </div>
                    </div>
                    {/*more info drawer*/}
                    <div className="bottom-bar-wrapper">
                        <div className="bottom-bar">
                            <div className="action-icons">
                                <div className="menu-hum" onClick={this.handleDrawer}><BiMenu/></div>
                                <div><Link to="/"><BiHomeAlt/></Link></div>
                                <div><Link to="/"><FiUsers/></Link></div>
                                <div><Link to="/"><FiBell/></Link></div>
                                <div><Link to="/"><BsChatDots/></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar