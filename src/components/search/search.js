import React from 'react'
import {Tabs} from 'antd';
import {BiXCircle} from "react-icons/bi";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        };
        this.search = this.search.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    componentDidMount() {
        document.title = "Rideyu | Search";
    }

    search() {

    }

    clearForm() {
        this.setState({searchText: ''})
    }

    render() {
        const {TabPane} = Tabs;
        return (
            <div className="container-fluid">
                <div className="search-page">
                    <div className="search-bar">
                        <input type="text"
                               value={this.state.searchText}
                               onChange={event => this.setState({searchText: event.target.value})}
                               placeholder="Search rideyu."/>
                        {this.state.searchText !== "" &&
                        <div className="clear-btn" onClick={this.clearForm}><BiXCircle/></div>}
                    </div>
                    <div>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="People" key="1">
                                <div>people</div>
                            </TabPane>
                            <TabPane tab="Posts" key="2">
                                <div>posts</div>
                            </TabPane>
                            <TabPane tab="Communities" key="3">
                                <div>groups</div>
                            </TabPane>
                            <TabPane tab="Services" key="4">
                                <div>services</div>
                            </TabPane>
                            <TabPane tab="Finances" key="5">
                                <div>finances</div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        );

    }
}

export default Search;