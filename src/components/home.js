import React from "react";
import AddPost from "./posts/add-post";
import Api from "../api"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCommentDots, faHeart, faEdit} from '@fortawesome/free-regular-svg-icons'
import {faEllipsisH, faPlusCircle, faSlidersH, faUserCircle} from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            rows: 2,
            minRows: 2,
            maxRows: 10,
            file: null,
            isToggleOn: true,
            overlay2: false,
            posts: [],
            selected: {}
        }
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        document.title = "Rideyu | Home of rides";
        this.getPosts()
    }

    getPosts() {
        Api.get('fetch-posts').then(res => {
            this.setState({posts: res.data.posts})
        }).catch(error => {
            console.log(error)
        })

    }

    handlePopover = (item) => {
        this.setState(
            prevState => {
                const selected = {...prevState.selected};
                selected[item] = !selected[item];
                return {selected};
            })
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

    render() {
        return (
            <div className="container-fluids">

                <input type="checkbox" id="drawer-checkbox"/>
                <div role="navigation" className="drawer">
                    <div className="drawer-header">
                        <div className="drawer-title">
                            <div className="creat-post-icon">
                                <FontAwesomeIcon icon={faEdit}/>
                            </div>
                            <div>Share a post</div>
                        </div>
                        <div data-tooltip="Close" className="tooltip left close-drawer">
                            <label htmlFor="drawer-checkbox">
                                <div
                                    className="chevron-right"/>
                            </label>
                        </div>
                    </div>
                    <AddPost/>
                </div>
                <label htmlFor="drawer-checkbox" id="drawer-overlay"/>
                <label htmlFor="drawer-checkbox">
                    <div className="floating-btn">
                        <FontAwesomeIcon icon={faPlusCircle}/>
                    </div>
                </label>

                <div className="content-wrapper">
                    <div className="more-details">
                        <p>#home</p>
                        <p>#communities</p>
                        <p>#locate services</p>
                        <p>#hire a ride</p>
                        <p>#bookings</p>
                        <p>#marketplace</p>
                        <p>#my garage</p>
                        <p>#questions & answers</p>
                        <p>#jobs</p>
                        <p>#companies</p>
                        <p>#finances</p>
                        <button>Settings</button>
                        <div className="line-divider"/>
                        <div className="footer">
                            <span>About</span>
                            <span>Terms</span>
                            <span>Privacy</span>
                            <span>Advertising</span>
                        </div>
                        <div className="footer2">
                            <span>@{new Date().getFullYear()} rideyu.</span>
                        </div>
                    </div>
                    <div className="feeds">
                        <div className="feeds-settings">
                            <div onClick={this.handleClick} className="feeds-sort">
                                <FontAwesomeIcon icon={faSlidersH}/>
                            </div>
                            <div className="timeline-feeds">
                                <div className="active item">Explore</div>
                                <div className="item">My Feed</div>
                            </div>
                        </div>
                        <label htmlFor="drawer-checkbox">
                            <div className="creat-post">
                                <div className="text-area">
                                    <div className="creat-post-icon">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </div>
                                    <div>
                                        Create a post
                                    </div>
                                </div>
                            </div>
                        </label>
                        {/*lists timeline posts*/}
                        <div className="posts-wrapper">
                            {this.state.posts.map((item) => {
                                return <div className="the-post" key={item.ID}>
                                    <div className="the-avatar">
                                        <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                    </div>
                                    <div className="details">
                                        <div className="head">
                                            <div className="left-items">
                                                <div className="user-avatar">
                                                    <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                                </div>
                                                <div className="item-list">
                                                    {item.Username}
                                                </div>
                                                <div className="item-list">
                                                    <Link to="/">Follow</Link>
                                                </div>
                                            </div>
                                            <div
                                                onClick={() => this.handlePopover(item.id)}
                                                className="right-items">
                                                <FontAwesomeIcon icon={faEllipsisH}/>
                                            </div>
                                        </div>
                                        <div className="the-body">
                                            {item.Description}
                                            <div style={{display: this.state.selected[item.id] ? 'block' : 'none'}}
                                                 className="pop-over">
                                                popover
                                            </div>
                                        </div>
                                        <div className="the-footer">
                                            <div className="the-items-count">
                                                160 Likes
                                            </div>
                                            <div className="the-items-icons">
                                                <div className="item-icon">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                                <div className="item-icon">
                                                    <FontAwesomeIcon icon={faCommentDots}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
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