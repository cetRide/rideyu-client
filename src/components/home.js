import React from "react";
import AddPost from "./posts/add-post";
import Api from "../api"
import Post from "./posts/display-post";
import {FiEdit, FiSliders, FiPlus} from "react-icons/fi";
import {BiCopyright} from 'react-icons/bi'
import Comments from "./posts/comments";

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
            toggleExplore: true,
            toggleMyFeeds: false,
            overlay2: false,
            posts: [],
            selected: {},
            postId: ''
        }
        this.getPosts = this.getPosts.bind(this);
        this.handlePopover = this.handlePopover.bind(this);
        this.handleComments = this.handleComments.bind(this);
        this.handleToggleExplore = this.handleToggleExplore.bind(this);
        this.handleToggleMyFeeds = this.handleToggleMyFeeds.bind(this);
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

    handleToggleExplore() {
        this.setState({
            toggleExplore: true,
            toggleMyFeeds: false
        })
    }

    handleToggleMyFeeds() {
        this.setState({
            toggleExplore: false,
            toggleMyFeeds: true
        })
    }

    handlePopover(item) {
        this.setState(
            prevState => {
                const selected = {...prevState.selected};
                selected[item] = !selected[item];
                return {selected};
            }
        );
    }

    handleComments(item) {
        this.setState({postId: item});
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
            <div style={{background: 'whitesmoke'}}>
                <div className="container-fluids">

                    <input type="checkbox" id="comment-checkbox"/>
                    <div id="comment-overlay"/>
                    <div  className="drawer add-comment">
                        <div className="drawer-header">
                            <div className="drawer-title">
                                <div>Comments</div>
                            </div>
                            <div className="close-drawer">
                                <label htmlFor="comment-checkbox">
                                    <div
                                        className="chevron-right"/>
                                </label>
                            </div>
                        </div>
                        <div>
                            <Comments post_id={this.state.postId}/>
                        </div>
                    </div>

                    <input type="checkbox" id="drawer-checkbox"/>
                    <div role="navigation" className="drawer addpost">
                        <div className="drawer-header">
                            <div className="drawer-title">
                                <div className="creat-post-icon">
                                    <FiEdit/>
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
                            <FiPlus/>
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
                            <p>#find dealers</p>
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
                                <span><BiCopyright/> {new Date().getFullYear()} rideyu.</span>
                            </div>
                        </div>
                        <div className="feeds">
                            <div className="feeds-settings">
                                <div onClick={this.handleClick} className="feeds-sort">
                                    <FiSliders/>
                                </div>
                                <div className="timeline-feeds">
                                    <div onClick={this.handleToggleExplore}
                                         className={this.state.toggleExplore ? 'active' : 'item'}>Explore
                                    </div>
                                    <div onClick={this.handleToggleMyFeeds}
                                         className={this.state.toggleMyFeeds ? 'active' : 'item'}>My Feed
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="drawer-checkbox">
                                <div className="creat-post">
                                    <div className="text-area">
                                        <div className="creat-post-icon">
                                            <FiEdit/>
                                        </div>
                                        <div>
                                            Create a post
                                        </div>
                                    </div>
                                </div>
                            </label>
                            {/*lists timeline posts*/}
                            <div className="posts-wrapper">
                                <Post
                                    item={this.state.posts}
                                    selected={this.state.selected}
                                    handlePopover={this.handlePopover}
                                    handleComments={this.handleComments}
                                />
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
            </div>
        );
    }
}

export default Home;