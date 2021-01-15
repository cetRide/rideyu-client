import React from "react";
import {EditOutlined, UserOutlined} from '@ant-design/icons';
import AddPost from "./posts/add-post";
import {BiPlus} from "react-icons/bi";
import {Avatar} from "antd";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
            value: '',
            rows: 2,
            minRows: 2,
            maxRows: 10,
            file: null
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

    render() {
        return (
            <div className="container-fluids">
                {/*add post floting button*/}
                <div onClick={this.open.bind(this, true)} className="floating-btn">
                    <BiPlus/>
                </div>
                {this.state.displayModal &&
                <div className="overlay" onClick={this.open.bind(this, false)}/>}
                <div className="feeds">
                    <div className="timeline-feeds">
                        <div className="active item">Explore</div>
                        <div className="item">My Feed</div>
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

                                </div>
                                <div className="the-body">
                                    post1
                                </div>
                            </div>
                        </div>

                        <div className="the-post">
                            <div className="the-avatar">
                                <Avatar size="large" icon={<UserOutlined/>}/>
                            </div>
                            <div className="details">
                                <div className="head">

                                </div>
                                <div className="the-body">
                                    post3
                                </div>
                            </div>
                        </div>

                        <div className="the-post">
                            <div className="the-avatar">
                                <Avatar size="large" icon={<UserOutlined/>}/>
                            </div>
                            <div className="details">
                                <div className="head">

                                </div>
                                <div className="the-body">
                                    post3
                                </div>
                            </div>
                        </div>

                        <div className="the-post">
                            <div className="the-avatar">
                                <Avatar size="large" icon={<UserOutlined/>}/>
                            </div>
                            <div className="details">
                                <div className="head">

                                </div>
                                <div className="the-body">
                                    post4
                                </div>
                            </div>
                        </div>

                        <div className="the-post">
                            <div className="the-avatar">
                                <Avatar size="large" icon={<UserOutlined/>}/>
                            </div>
                            <div className="details">
                                <div className="head">

                                </div>
                                <div className="the-body">
                                    post5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;