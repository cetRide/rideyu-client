import React from "react";
import {EditOutlined, UserOutlined} from '@ant-design/icons';
import AddPost from "./posts/add-post";
import {BiPlus, BiSliderAlt, BiHeart, BiDotsHorizontalRounded, BiDotsVerticalRounded} from "react-icons/bi";
import {Avatar, Divider, Popover} from "antd";
import {Link} from "react-router-dom";
import {AiOutlineComment} from "react-icons/ai";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
            value: '',
            rows: 2,
            minRows: 2,
            maxRows: 10,
            file: null,
            isToggleOn: true,
            overlay2: false
        };
        this.open = this.open.bind(this);
    }

    componentDidMount() {
        document.title = "Rideyu | Home of rides";
    }

    open(state) {
        this.setState({
            displayModal: state
        });
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
        if (this.state.isToggleOn) {
            document.getElementById("sort-id").style.width = "auto";
            this.setState({
                overlay2: true
            })
        } else {
            document.getElementById("sort-id").style.width = "0";
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
        document.getElementById("sort-id").style.width = "0";
    }
    render() {
        const divider = {
            margin: '8px 0'
        }
        return (
            <div className="container-fluids">
                {this.state.overlay2 &&
                <div className="overlay2" onClick={this.closeOvelay}/>}
                {/*add post floting button*/}
                <div onClick={this.open.bind(this, true)} className="floating-btn">
                    <BiPlus/>
                </div>

                {this.state.displayModal &&
                <div className="overlay" onClick={this.open.bind(this, false)}/>}

                <div className="content-wrapper">
                    <div className="user-shortcuts">
                        <div className="profile">
                            <div className="cover">

                            </div>
                            <div className="profile-pic">

                            </div>
                            <div className="profile-body">
                                <p>Cetric</p>
                                <div className="view-profile">
                                    View profile
                                </div>
                                <div className="bar-one">
                                    <div>Posts</div>
                                    <div>Followers</div>
                                    <div>Following</div>
                                    <div><BiDotsVerticalRounded/></div>
                                </div>
                            </div>
                        </div>
                        <div className="discover-people">

                        </div>
                        <div className="">

                        </div>
                    </div>
                    <div className="feeds">
                        <div className="feeds-settings">
                            <div onClick={this.handleClick} className="feeds-sort">
                                <BiSliderAlt/>
                            </div>
                            <div className="timeline-feeds">
                                <div className="active item">Explore</div>
                                <div className="item">My Feed</div>
                            </div>
                        </div>
                        <div className="creat-post">
                            <div className="text-area" onClick={this.open.bind(this, true)}>
                                <div>
                                    <EditOutlined style={{marginRight: '10px'}}/>
                                </div>
                                <div>
                                    Create a post
                                </div>
                            </div>
                            {/*create post modal*/}
                            {this.state.displayModal &&
                            <div className="dialog">
                                <div className="head">
                                    <div className="modal-title">Create a post</div>
                                    <div className="cancel-btn" onClick={this.open.bind(this, false)}> &#10005;</div>
                                </div>
                                <AddPost/>
                            </div>
                            }
                        </div>
                        {/*lists timeline posts*/}
                        <div className="posts-wrapper">
                            <div className="the-post">
                                <div className="the-avatar">
                                    <Avatar size="large" icon={<UserOutlined/>}/>
                                </div>
                                <div className="details">
                                    <div className="head">
                                        <div className="left-items">
                                            <div className="user-avatar">
                                                <Avatar icon={<UserOutlined/>}/>
                                            </div>
                                            <div className="item-list">
                                                cetric
                                            </div>
                                            <div className="item-list">
                                                <Link to="/">Follow</Link>
                                            </div>
                                        </div>
                                        <Popover placement="bottomRight" content={
                                            <div className="popover-style">
                                                <div>Posted - Fri 7:40AM</div>
                                                <Divider style={divider}/>
                                                <p>Save Post</p>
                                                <p>Report Post</p>
                                                <p>Report User</p>
                                            </div>
                                        } trigger="click">
                                            <div className="right-items">
                                                <BiDotsHorizontalRounded/>
                                            </div>
                                        </Popover>
                                    </div>
                                    <div className="the-body">
                                        post1
                                    </div>
                                    <div className="the-footer">
                                        <div className="the-items-count">
                                            160 Likes
                                        </div>
                                        <div className="the-items-icons">
                                            <div className="item-icon">
                                                <BiHeart/>
                                            </div>
                                            <div className="item-icon">
                                                <AiOutlineComment/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="the-post">
                                <div className="the-avatar">
                                    <Avatar size="large" icon={<UserOutlined/>}/>
                                </div>
                                <div className="details">
                                    <div className="head">
                                        <div className="left-items">
                                            <div className="user-avatar">
                                                <Avatar icon={<UserOutlined/>}/>
                                            </div>
                                            <div className="item-list">
                                                Elvis
                                            </div>
                                            <div className="item-list">
                                                <Link to="/">Unfollow</Link>
                                            </div>
                                        </div>
                                        <Popover placement="bottomRight" content={
                                            <div className="popover-style">
                                                <div>Posted - Sat 7:40AM</div>
                                                <Divider style={divider}/>
                                                <p>Save Post</p>
                                                <p>Report Post</p>
                                                <p>Report User</p>
                                            </div>
                                        } trigger="click">
                                            <div className="right-items">
                                                <BiDotsHorizontalRounded/>
                                            </div>
                                        </Popover>
                                    </div>
                                    <div className="the-body">
                                        post2
                                    </div>
                                    <div className="the-footer">
                                        <div className="the-items-count">
                                            24 Likes
                                        </div>
                                        <div className="the-items-icons">
                                            <div className="item-icon">
                                                <BiHeart/>
                                            </div>
                                            <div className="item-icon">
                                                <AiOutlineComment/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="the-post">
                                <div className="the-avatar">
                                    <Avatar size="large" icon={<UserOutlined/>}/>
                                </div>
                                <div className="details">
                                    <div className="head">
                                        <div className="left-items">
                                            <div className="user-avatar">
                                                <Avatar icon={<UserOutlined/>}/>
                                            </div>
                                            <div className="item-list">
                                                Gloria
                                            </div>
                                            <div className="item-list">
                                                <Link to="/">Unfollow</Link>
                                            </div>
                                        </div>
                                        <Popover placement="bottomRight" content={
                                            <div className="popover-style">
                                                <div>Posted - Sat 7:40AM</div>
                                                <Divider style={divider}/>
                                                <p>Save Post</p>
                                                <p>Report Post</p>
                                                <p>Report User</p>
                                            </div>
                                        } trigger="click">
                                            <div className="right-items">
                                                <BiDotsHorizontalRounded/>
                                            </div>
                                        </Popover>
                                    </div>
                                    <div className="the-body">
                                        post2
                                    </div>
                                    <div className="the-footer">
                                        <div className="the-items-count">
                                            1.1k Likes
                                        </div>
                                        <div className="the-items-icons">
                                            <div className="item-icon">
                                                <BiHeart/>
                                            </div>
                                            <div className="item-icon">
                                                <AiOutlineComment/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-details">

                    </div>
                </div>

                <div id="sort-id" className="sort-menu">
                    <p>Top</p>
                    <p>Newest</p>
                </div>

            </div>
        );
    }
}

export default Home;