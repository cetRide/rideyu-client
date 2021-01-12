import React from "react";
import {FileImageOutlined, EditOutlined, VideoCameraAddOutlined} from '@ant-design/icons';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
            value: '',
            rows: 2,
            minRows: 2,
            maxRows: 10,
            file: null
        };
        this.open = this.open.bind(this);
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        document.title = "Rideyu | Home of rides";
    }
    open(state) {
        this.setState({
            displayModal: state
        });
    }

    handleChange = (event) => {
        const textareaLineHeight = 24;
        const {minRows, maxRows} = this.state;
        const previousRows = event.target.rows;
        event.target.rows = minRows;
        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }
        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
    };

    onChange(event) {
        this.setState({
            file: window.URL.createObjectURL(event.target.files[0])
        })
        this.setState({
            displayModal: true
        });
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.displayModal &&
                <div className="overlay" onClick={this.open.bind(this, false)}/>}
                <div className="creat-post col-5">
                    <div className="text-area" onClick={this.open.bind(this, true)}>
                        <div>
                            <EditOutlined style={{marginRight: '10px'}}/>
                        </div>
                        <div>
                            Create a post
                        </div>
                    </div>
                    <div className="upload-label">
                        <div className="upload-wrapper">
                            <div className="upload-btn">
                                <div className="item">
                                    <FileImageOutlined
                                        style={{fontSize: '16px', color: '#008cff', marginRight: '10px'}}/>
                                </div>
                                <div className="item">
                                    Photo
                                </div>
                            </div>
                            <input type="file"
                                   ref="file"
                                   name="user[image]"
                                   multiple={true}
                                   accept="image/*"
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className="upload-wrapper">
                            <div className="upload-btn">
                                <div className="item">
                                    <VideoCameraAddOutlined
                                        style={{fontSize: '16px', color: '#F93154', marginRight: '10px'}}/>
                                </div>
                                <div className="item">
                                    Video
                                </div>
                            </div>
                            <input type="file" accept="video/*" name="myfile" multiple/>
                        </div>
                    </div>

                    {/*create post modal*/}
                    {this.state.displayModal &&
                    <div className="dialog">
                        <div className="head">
                            <div className="modal-title">Create a post</div>
                            <div className="cancel-btn" onClick={this.open.bind(this, false)}> &#10005;</div>
                        </div>
                        <div className="modal-body">
                            <div className="upload-contents">
                                <textarea
                                    rows={this.state.rows}
                                    value={this.state.value}
                                    placeholder={'What do you want to share?'}
                                    className={'textarea'}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="files">
                                <img className="imga" src={this.state.file}/>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <div className="action-btn">
                                <div className="btn-action">
                                    <FileImageOutlined
                                        style={{fontSize: '16px', color: '#008cff'}}/>
                                    <input type="file"
                                           ref="file"
                                           name="user[image]"
                                           accept="image/*"
                                           multiple={true}
                                           onChange={this.onChange}
                                    />
                                </div>
                                <div className="btn-action">
                                    <VideoCameraAddOutlined
                                        style={{fontSize: '16px', color: '#F93154'}}/>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                    onClick={this.open.bind(this, false)}>Post
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default Home;