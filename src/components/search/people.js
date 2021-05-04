import React from "react";

class People extends React.Component {

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
            <div style={{background: '#f2f2f2', height: '100vh'}}>
                <h1>People</h1>
                <p>{this.props.type}</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default People