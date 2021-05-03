import React from 'react';
import {Divider} from 'antd';
import {Link} from "react-router-dom";
import {FaRegBell, FaUsers} from "react-icons/fa";
import {
    BiCommentDots,
    BiListCheck,
    BiSearch,
    BiShoppingBag,
    BiHomeCircle,
    BiMessageSquareError,
    BiMenu
} from "react-icons/bi";
import {SettingOutlined, LogoutOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {MdLiveHelp} from "react-icons/md";
import {GiPayMoney} from "react-icons/gi";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faCommentAlt} from '@fortawesome/free-regular-svg-icons'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
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
            visible: true,
            overlay: false,
            overlay2: false,
            user: 'Cetric Okola'
        };
        this.handleClick = this.handleClick.bind(this)
        this.toggleNavAuthButtons = this.toggleNavAuthButtons.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
        if (this.state.isToggleOn) {
            document.getElementById("sub-menu-id").style.width = "260px";
            this.setState({
                overlay2: true
            })
        } else {
            document.getElementById("sub-menu-id").style.width = "0";
            this.setState({
                overlay2: false
            })
        }
    }

    closeOvelay = () => {
        this.setState({
            overlay2: false,
            isToggleOn: true
        })
        document.getElementById("sub-menu-id").style.width = "0";
    }
    closeDrawer = () => {
        this.setState({
            visible: true,
            overlay: false
        })

        document.getElementById("bottom-drawer").style.height = "0";
    }
    handleDrawer = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible,
            overlay: true
        }))
        if (this.state.visible) {
            document.getElementById("bottom-drawer").style.height = "350px";
        } else {
            document.getElementById("bottom-drawer").style.height = "0";
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
                {this.state.overlay &&
                <div className="overlay" onClick={this.closeDrawer}/>}
                {this.state.overlay2 &&
                <div className="overlay2" onClick={this.closeOvelay}/>}
                <div className="nav-bar">
                    <div className="horizontal-nav">
                        <div className="left-side">
                            <div className="nav-item-left nav-brand">
                                <Link to="/">{this.state.brand}</Link>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="items1">
                                <div className="nav-item-right">
                                    {linkItems}
                                </div>
                            </div>
                            <div className="items2">
                                {this.state.isLoggedIn ?
                                    <div className="user-icons">
                                        <div className="action-icons">
                                            <div id="search-button" className="tooltip bottom" data-tooltip="Search"><Link
                                                to="/search">
                                                <svg id="search-icon" className="search-icon" viewBox="0 0 24 24">
                                                    <path
                                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                                    <path d="M0 0h24v24H0z" fill="none"/>
                                                </svg></Link></div>
                                            <div className="tooltip bottom" data-tooltip="Messaging"><Link
                                                to="/"><FontAwesomeIcon icon={faCommentAlt}/></Link></div>
                                            <div className="tooltip bottom" data-tooltip="Notifications"><Link
                                                to="/"><FontAwesomeIcon icon={faBell}/></Link></div>
                                        </div>
                                        <div className="the-avatar">
                                            <FontAwesomeIcon onClick={this.handleClick} style={{cursor: 'pointer', marginRight: '20px'}}
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
                        <div id="sub-menu-id" className="sub-menu">
                            <div className="menu-container">
                                <div className="head">
                                    <div className="the-avatar">
                                        <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
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
                    <div id="bottom-drawer" className="bottom-drawer-menu">
                        <div className="close-btn-wrap">
                            <div className="menu-item">Menu</div>
                            <div onClick={this.closeDrawer} className="close-btn">&#10005;</div>
                        </div>
                        <div className="contents">
                            <p><FaUsers style={styleIcons}/>Communities</p>
                            <p><MdLiveHelp style={styleIcons}/>Services</p>
                            <p><BiListCheck style={styleIcons}/>Bookings</p>
                            <p><BiShoppingBag style={styleIcons}/>Marketplace</p>
                            <p><GiPayMoney style={styleIcons}/>Finances</p>
                            <div className="footer">
                                <span>About</span>
                                <span>Terms of Service</span>
                                <span>Privacy</span>
                                <span>Advertising</span>
                            </div>
                            <div className="footer2">
                                <span>@2021 rideyu.</span>
                            </div>
                        </div>
                    </div>
                    {/*more info drawer*/}
                    <div className="bottom-bar-wrapper">
                        <div className="bottom-bar">
                            <div className="action-icons">
                                <div className="menu-hum" onClick={this.handleDrawer}><BiMenu/></div>
                                <div><Link to="/"><BiHomeCircle/></Link></div>
                                <div><Link to="/search"><BiSearch/></Link></div>
                                <div><Link to="/"><FaRegBell/></Link></div>
                                <div><Link to="/"><BiCommentDots/></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar