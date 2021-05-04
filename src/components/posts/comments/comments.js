import React from "react";
import Api from "../../../api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {VscChromeClose} from "react-icons/vsc";
import CommentList from "./comment-list";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            isReply: false,
            commentId: '',
            moreAction: false
        }
        this.handleReply = this.handleReply.bind(this);
        this.handleMoreAction = this.handleMoreAction.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.post_id !== prevProps.post_id) {
            this.fetchComments(this.props.post_id);
        }
    }

    handleReply(item) {
        this.setState({commentId: item, isReply: true, moreAction: false})
    }

    handleMoreAction(item) {
        this.setState({commentId: item, moreAction: true, isReply: false})
    }

    closeReplyForm = (type) => {
        if (type === 'reply') {
            this.setState({commentId: '', isReply: false})
        } else {
            this.setState({commentId: '', moreAction: false})
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
                        <div className="form-input">
                            <input type="text" placeholder="Your comment"/>
                            <span>Press enter to comment</span>
                        </div>
                    </div>
                    {this.state.comments.length > 0 &&
                    <div className="drawer-body">
                        <CommentList
                            item={this.state.comments}
                            handleReply={this.handleReply}
                            handleMoreAction={this.handleMoreAction}
                        />
                    </div>}
                    <div style={{display: this.state.isReply ? 'block' : 'none'}} className="reply">
                        <div className="add-comment">
                            <div className="the-avatar">
                                <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder="Your reply"/>
                                <span>Press enter to reply</span>
                            </div>
                            <div className="close-reply" onClick={() => this.closeReplyForm('reply')}>
                                <VscChromeClose/></div>
                        </div>
                    </div>

                    <div style={{display: this.state.moreAction ? 'block' : 'none'}} className="more-action">
                        <div onClick={() => this.closeReplyForm('more-action')} className="close-btn">
                            <VscChromeClose/>
                        </div>
                        <div>
                            <p>Created at {this.state.commentId}</p>
                            <p className="text-danger">Delete comment</p>
                            <p className="text-danger">Block user</p>
                            <p className="text-danger">Report</p>
                        </div>
                    </div>

                </div>
            </div>)
    }
}

export default Comments;