import React from "react";
import {FileImageOutlined, VideoCameraAddOutlined} from "@ant-design/icons";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            rows: 2,
            minRows: 2,
            maxRows: 10,
            file: null
        };
        this.onChange = this.onChange.bind(this)
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
        return (<div>
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
                    <img className="imga" src={this.state.file} alt=""/>
                </div>
            </div>
            <div className="bottom-section">
                <div className="action-btn">
                    <div className="btn-action">
                        <div className="label-item">
                            <FileImageOutlined
                                style={{fontSize: '16px', color: '#008cff'}}/>
                        </div>
                        <div className="label-item">
                            Photo
                        </div>
                        <input type="file"
                               ref="file"
                               name="user[image]"
                               accept="image/*"
                               multiple={true}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="btn-action">
                        <div className="label-item">
                            <VideoCameraAddOutlined
                                style={{fontSize: '16px', color: '#F93154'}}/>
                        </div>
                        <div className="label-item">
                            Video
                        </div>
                        <input type="file"
                               ref="file"
                               name="user[image]"
                               accept="video/*"
                               multiple={true}
                               onChange={this.onChange}
                        />
                    </div>
                </div>
                <div className="post-btn">Post</div>
            </div>
        </div>);
    }
}

export default AddPost;