import React from "react";

class Posts extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.text !== prevProps.text) {
            if (this.props.text !== '') {
                this.doSearch(this.props.text);
            }
        }
    }
    componentWillMount() {
        if (this.props.text !== '') {
            this.doSearch(this.props.text);
        }
    }
    doSearch(text) {
        console.log("i am being searched now.: ", text)
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <p>{this.props.type}</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Posts