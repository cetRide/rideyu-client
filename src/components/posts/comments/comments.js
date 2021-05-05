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
            comments: [
                {
                    "ID": 2,
                    "Comment": "one",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:33:47.48361Z",
                    "ParentCommentId": 0,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2"
                },
                {
                    "ID": 8,
                    "Comment": "reply1",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:35:55.836266Z",
                    "ParentCommentId": 2,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,8"
                },
                {
                    "ID": 9,
                    "Comment": "reply2",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:36:05.97398Z",
                    "ParentCommentId": 2,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,9"
                },
                {
                    "ID": 10,
                    "Comment": "reply3",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:36:13.627642Z",
                    "ParentCommentId": 2,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,10"
                },
                {
                    "ID": 11,
                    "Comment": "reply4",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:36:17.218631Z",
                    "ParentCommentId": 2,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,11"
                },
                {
                    "ID": 13,
                    "Comment": "reply6",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:36:52.05814Z",
                    "ParentCommentId": 11,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,11,13"
                },
                {
                    "ID": 14,
                    "Comment": "reply reply6",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:36:59.20731Z",
                    "ParentCommentId": 11,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,11,14"
                },
                {
                    "ID": 19,
                    "Comment": "reply reply repl",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:37:21.285018Z",
                    "ParentCommentId": 14,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,11,14,19"
                },
                {
                    "ID": 15,
                    "Comment": "reply reply reply6",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:37:05.040063Z",
                    "ParentCommentId": 11,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,11,15"
                },
                {
                    "ID": 12,
                    "Comment": "reply5",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:36:20.69217Z",
                    "ParentCommentId": 2,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "2,12"
                },
                {
                    "ID": 3,
                    "Comment": "two",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:33:54.060146Z",
                    "ParentCommentId": 0,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "3"
                },
                {
                    "ID": 16,
                    "Comment": "reply reply reply6",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:37:11.151953Z",
                    "ParentCommentId": 3,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "3,16"
                },
                {
                    "ID": 17,
                    "Comment": "reply reply repl",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:37:14.349717Z",
                    "ParentCommentId": 3,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "3,17"
                },
                {
                    "ID": 4,
                    "Comment": "three",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:33:59.375827Z",
                    "ParentCommentId": 0,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "4"
                },
                {
                    "ID": 18,
                    "Comment": "reply reply repl",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:37:17.11372Z",
                    "ParentCommentId": 4,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "4,18"
                },
                {
                    "ID": 5,
                    "Comment": "four",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:34:05.14561Z",
                    "ParentCommentId": 0,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "5"
                },
                {
                    "ID": 6,
                    "Comment": "five",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:34:09.492582Z",
                    "ParentCommentId": 0,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "6"
                },
                {
                    "ID": 7,
                    "Comment": "six",
                    "Username": "fred",
                    "User_id": "2",
                    "CreatedAt": "2021-04-25T00:34:52.795306Z",
                    "ParentCommentId": 0,
                    "ProfilePicture": {
                        "String": "",
                        "Valid": false
                    },
                    "Path": "7"
                }
            ],
            // comments: [],
            isReply: false,
            commentId: '',
            moreAction: false,
            viewCommentLikes: false
        }
        this.handleReply = this.handleReply.bind(this);
        this.handleMoreAction = this.handleMoreAction.bind(this);
        this.handleViewCommentLikes = this.handleViewCommentLikes.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.post_id !== prevProps.post_id) {
            // this.fetchComments(this.props.post_id);
        }
    }

    componentDidMount() {
        if (this.props.post_id !== '') {
            // this.fetchComments(this.props.post_id);
        }
    }

    handleReply(item) {
        this.setState({commentId: item, isReply: true, moreAction: false})
    }

    handleViewCommentLikes(item) {
        this.setState({commentId: item, viewCommentLikes: true, isReply: false})
    }

    handleMoreAction(item) {
        this.setState({commentId: item, moreAction: true, isReply: false})
    }

    closeReplyForm = (type) => {
        if (type === 'reply') {
            this.setState({commentId: '', isReply: false})
        } else if (type === 'more-action'){
            this.setState({commentId: '', moreAction: false})
        } else {
            this.setState({commentId: '', viewCommentLikes: false})
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
                        console.log(res.data.comments)
                    }
                }
            })
    }

    render() {
        return (
            <div>
                <div className="comment-wrapper">
                    {this.state.comments.length < 1 &&
                    <div className="info-text">No comments</div>
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
                            handleViewCommentLikes={this.handleViewCommentLikes}
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

                    <div style={{display: this.state.viewCommentLikes ? 'block' : 'none'}} className="more-action">
                        <div onClick={() => this.closeReplyForm('likes')} className="close-btn">
                            <VscChromeClose/>
                        </div>
                        <div style={{height: '50vh'}} className="likes-wrapper">
                            <div className="top-head">
                                People who liked the reply
                            </div>
                            <div className="user-list">

                                <div className="user-box">
                                    <div className="user">
                                        <div className="user-avatar">
                                            <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                        </div>
                                        <div className="user-username">
                                            cetric
                                        </div>
                                    </div>

                                    <div className="follow-btn">
                                        <button className="follow">Follow</button>
                                        {/*<button className="un-follow">Unfollow</button>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>)
    }
}

export default Comments;