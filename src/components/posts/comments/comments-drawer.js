import React, {Suspense} from "react";

const LikesList = React.lazy(() => import('./likes-list'));
const CommentList = React.lazy(() => import('./comments'));

class CommentsDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'comments',
            isActive: false,
            commentsActive: true
        }
        this.renderComponent = this.renderComponent.bind(this);
    }
    switchComponent= (type) => {
        this.setState({type: type, isActive: false})
        if (type === 'likes'){
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
                        <div style={{borderBottom: this.state.likesActive ? '3px solid #00c18b': ''}} onClick={() => this.switchComponent('likes')} className="stats-text">
                            11k likes
                        </div>
                        <div style={{borderBottom: this.state.commentsActive ? '3px solid #00c18b': ''}} onClick={() => this.switchComponent('comments')} className="stats-text">
                            600 comments
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