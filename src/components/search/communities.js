import React from "react";

class Communities extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.text !== prevProps.text) {
            if (this.props.text !== '') {
                this.doSearch(this.props.text);
            }
        }
    }
    componentDidMount() {
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
                <h1>Communities</h1>
                <p>{this.props.type}</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Communities