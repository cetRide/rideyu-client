import React, {Suspense} from 'react'
import {VscClose} from "react-icons/vsc";


const Posts = React.lazy(() => import('./posts'));
const People = React.lazy(() => import('./people'));
const Jobs = React.lazy(() => import('./jobs'));
const Communities = React.lazy(() => import('./communities'));
const Services = React.lazy(() => import('./services'));


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = 0;
        this.state = {
            searchText: "",
            userInput: "",
            type: 'people',
        };
        this.clearText = this.clearText.bind(this);
        this.renderComponent = this.renderComponent.bind(this);
        this.submitSearchText = this.submitSearchText.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }

    componentDidMount() {
        document.title = "Rideyu | Search";
    }

    doSearch() {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.setText()
        }, 300);
    }

    renderComponent() {
        let type = this.state.type
        switch (type) {
            case "posts":
                return <Posts text={this.state.userInput}/>
            case "people":
                return <People text={this.state.userInput}/>
            case "jobs":
                return <Jobs text={this.state.userInput}/>
            case "services":
                return <Services text={this.state.userInput}/>
            case "communities":
                return <Communities text={this.state.userInput}/>
            default:
                return <People text={this.state.userInput}/>
        }
    }

    submitSearchText(event) {
        event.preventDefault();
        this.setText()
    }

    setText() {
        this.setState({userInput: this.state.searchText})
    }

    search = (type) => {
        this.setState({type: type})
    }

    clearText() {
        this.setState({searchText: '', userInput: ''})
    }

    render() {
        const type = this.state.type
        return (
            <div>
                <div className="container-fluid">
                    <div className="search-page">
                        <div className="search-bar">
                            <form onSubmit={this.submitSearchText} onChange={this.doSearch}>
                                <input type="text"
                                       value={this.state.searchText}
                                       onChange={event => this.setState({searchText: event.target.value})}
                                       placeholder="Search rideyu."/>
                                {this.state.searchText !== "" &&
                                <div className="tooltip bottom clear-btn" data-tooltip="close" onClick={this.clearText}>
                                    <VscClose/></div>}</form>
                        </div>

                        <div className="search-tabs">
                            <div style={{
                                backgroundColor: type === 'people' ? "#e3e6eb" : '',
                                color: type === 'people' ? "#008cff" : ''
                            }} className="tab-item" onClick={() => this.search('people')}>People
                            </div>
                            <div style={{
                                backgroundColor: type === 'posts' ? "#e3e6eb" : '',
                                color: type === 'posts' ? "#008cff" : ''
                            }} className="tab-item" onClick={() => this.search('posts')}>Posts
                            </div>
                            <div style={{
                                backgroundColor: type === 'communities' ? "#e3e6eb" : '',
                                color: type === 'communities' ? "#008cff" : ''
                            }} className="tab-item" onClick={() => this.search('communities')}>Communities
                            </div>
                            <div style={{
                                backgroundColor: type === 'services' ? "#e3e6eb" : '',
                                color: type === 'services' ? "#008cff" : ''
                            }}
                                 className="tab-item" onClick={() => this.search('services')}>Services
                            </div>
                            <div
                                style={{
                                    backgroundColor: type === 'jobs' ? "#e3e6eb" : '',
                                    color: type === 'jobs' ? "#008cff" : ''
                                }}
                                className="tab-item" onClick={() => this.search('jobs')}>Jobs
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: '#f2f2f2', minHeight: '100vh'}}>
                    <div className="line-divider"/>

                    <div className="container-fluid">
                        <Suspense fallback={<div>Loading...</div>}>
                            {this.renderComponent()}
                        </Suspense>

                    </div>
                </div>
            </div>
        );

    }
}

export default Search;