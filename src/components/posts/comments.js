import React from "react";
import Api from "../../api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.post_id !== prevProps.post_id) {
            this.fetchComments(this.props.post_id);
        }
    }

    fetchComments(id) {
        Api.get(`/fetch-post-comments/${id}`)
            .then(res => {
                if (res.data.success) {
                    if (res.data.comments === null) {
                        this.setState({comments: []})
                    } else {
                        this.setState({comments: res.data.comments})
                    }
                }
            })
    }

    render() {
        return (
            <div>
                <div className="comment-wrapper">
                    <div className="line-divider"/>

                    {this.state.comments.length < 1 &&
                    <p className="info-text">No comments</p>
                    }
                    <div className="add-comment">
                        <div className="the-avatar">
                            <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                        </div>
                        <div>
                            <input type="text" placeholder="Your comment"/>
                        </div>
                    </div>
                    {this.state.comments.map((item) => {
                        const level1 = item.Path.split(",").length
                        return (
                            <div key={item.ID}>
                                <div style={{marginLeft: level1 === 2 ? '30px' : level1 > 2 ? '60px' : '0'
                                }} className="comment-box">
                                    <div className="the-avatar">
                                        <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                    </div>
                                    <div className="">
                                        <div className="message-box">
                                            <span className="text-bold">{item.Username}</span>
                                            <p>{item.Comment}</p>
                                        </div>
                                        <div>
                                            <div className="bottom-action">
                                                <span>Like</span>
                                                <span>Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>)
    }
}

export default Comments;