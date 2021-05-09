import React, {Suspense} from "react";
import Api from "../../../api";

const LikesList = React.lazy(() => import('./likes-list'));
const CommentList = React.lazy(() => import('./comments'));

class CommentsDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'comments',
            isActive: false,
            commentsActive: true,
            likesCount: '',
            commentsCount: ''
        }
        this.renderComponent = this.renderComponent.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (this.props.postId !== prevProps.postId) {
            this.getPostCommentsCount()
            this.getPostLikesCount()
        }
    }

    getPostCommentsCount() {
        Api.get(`/fetch-post-comments-count/${this.props.postId}`)
            .then(res => {
                this.setState({commentsCount: res.data.count})
            })
    }

    getPostLikesCount() {
        Api.get(`/fetch-post-likes-count/${this.props.postId}`)
            .then(res => {
                this.setState({likesCount: res.data.count})
            })
    }

    switchComponent = (type) => {
        this.setState({type: type, isActive: false})
        if (type === 'likes') {
            this.setState({commentsActive: false, likesActive: true})
        } else {
            this.setState({commentsActive: true, likesActive: false})
        }
    }

    renderComponent() {
        let type = this.state.type
        switch (type) {
            case "likes":
                return <LikesList text={this.state.userInput}/>
            case "comments":
                return <CommentList post_id={this.props.postId}/>
            default:
                return <CommentList text={this.state.userInput}/>
        }
    }

    render() {

        return (
            <div>
                <div className="comment-wrapper">
                    <div className="line-divider"/>
                    <div className="more-info">
                        <div style={{borderBottom: this.state.likesActive ? '3px solid #00c18b' : ''}}
                             onClick={() => this.switchComponent('likes')} className="stats-text">
                            {this.state.likesCount !== "" ? this.state.likesCount : 0} likes
                        </div>
                        <div style={{borderBottom: this.state.commentsActive ? '3px solid #00c18b' : ''}}
                             onClick={() => this.switchComponent('comments')} className="stats-text">
                            {this.state.commentsCount !== "" ? this.state.commentsCount : 0} comments
                        </div>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        {this.renderComponent()}
                    </Suspense>
                </div>
            </div>)
    }
}

export default CommentsDrawer;