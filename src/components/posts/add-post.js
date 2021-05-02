import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle, faTools, faTags, faFileImage, faBriefcase} from "@fortawesome/free-solid-svg-icons";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            rows: 15,
            minRows: 15,
            maxRows: 20,
            file: null
        };
        this.onChange = this.onChange.bind(this)
    }

    handleChange = (event) => {
        const textareaLineHeight = 25;
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
                            <FontAwesomeIcon style={{color: '#008cff'}} icon={faFileImage}/>
                        </div>
                        <div className="label-name">
                            Add Photo/Video
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
                            <FontAwesomeIcon style={{color: '#F93154'}} icon={faTools}/>
                        </div>
                        <div className="label-name">
                            Ask for service
                        </div>
                    </div>
                    <div className="btn-action">
                        <div className="label-item">
                            <FontAwesomeIcon style={{color: '#00c18b'}} icon={faTags}/>
                        </div>
                        <div className="label-name">
                            Sell something
                        </div>
                    </div>
                    <div className="btn-action">
                        <div className="label-item">
                            <FontAwesomeIcon style={{color: '#f2730b'}} icon={faBriefcase}/>
                        </div>
                        <div className="label-name">
                            Post a job
                        </div>
                    </div>
                    <div className="btn-action">
                        <div className="label-item">
                            <FontAwesomeIcon style={{color: '#F93154'}} icon={faQuestionCircle}/>
                        </div>
                        <div className="label-name">
                            Ask a question
                        </div>
                    </div>
                </div>
            </div>
            <button className="post-btn">
                Post
            </button>
        </div>);
    }
}

export default AddPost;