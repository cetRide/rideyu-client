import React from 'react';
import {Divider,Tooltip} from 'antd';
import {Link} from "react-router-dom";
import {FaRegBell, FaUsers} from "react-icons/fa";
import {
    BiCommentDots,
    BiListCheck,
    BiSearch,
    BiPlus,
    BiShoppingBag,
    BiHomeCircle,
    BiMessageSquareError,
    BiMenu
} from "react-icons/bi";
import {Avatar} from 'antd';
import {UserOutlined, SettingOutlined, LogoutOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {MdLiveHelp} from "react-icons/md";
import {GiPayMoney} from "react-icons/gi";

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
                                            <Tooltip placement="bottom" title="Search">
                                                <div><Link to="/search"><BiSearch/></Link></div>
                                            </Tooltip>
                                            <Tooltip placement="bottom" title="Messaging">
                                                <div><Link to="/"><BiCommentDots/></Link></div>
                                            </Tooltip>
                                            <Tooltip placement="bottom" title="Notifications">
                                                <div><Link to="/"><FaRegBell/></Link></div>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <Avatar onClick={this.handleClick}
                                                    style={{cursor: 'pointer', marginRight: '20px'}}
                                                    icon={<UserOutlined/>}/>
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
                    {/*add post floting button*/}
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
                    <div className="floating-btn">
                        <BiPlus/>
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