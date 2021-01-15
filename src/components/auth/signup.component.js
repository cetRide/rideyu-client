import React from "react";
import {notification, message, Spin, Divider} from "antd";
import {SmileOutlined, LoadingOutlined} from '@ant-design/icons';
import {FcGoogle} from "react-icons/fc";
import Api from "./../../api";
import {Link} from "react-router-dom";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.showHide = this.showHide.bind(this);
        this.state = {
            loading: false,
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            type: 'password',
            togglePass: true
        };
    }

    componentDidMount() {
        document.title = "Rideyu | Signup";
    }
    showHide() {
        this.setState({
            type: this.state.type === 'password' ? 'input' : 'password',
            togglePass: this.state.type !== 'password'
        })
    }
    register(event) {
        event.preventDefault();
        this.setState({loading: true})
        Api.post(`/account/register`, {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                if (res.data.status) {
                    notification.open({
                        message: 'Sign up',
                        description: res.data.message,
                        icon: <SmileOutlined style={{color: '#108ee9'}}/>,
                        placement: "bottomLeft",
                        className: 'custom-class'
                    });
                    this.setState({loading: false})
                    this.props.history.push('/');
                } else {
                    this.setState({loading: false})
                    message.error(res.data.message);
                }
            })
    }

    render() {
        const antIcon = <LoadingOutlined style={{fontSize: 34, color: 'red'}} spin/>;
        return (
            <div className="container-fluid forms">
                <div className="form-container col-s-7 col-5">
                    <div className="title">
                        <h1>
                            Sign up
                        </h1>
                    </div>
                    <div className="form-input-container">
                        <div className="form-input">
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={event => this.setState({username: event.target.value})}
                                placeholder="Username"/>
                        </div>
                        <div className="form-input">
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={event => this.setState({email: event.target.value})}
                                placeholder="Email"/>
                        </div>
                        <div className="form-pass">
                            <input
                                type={this.state.type}
                                onChange={event => this.setState({password: event.target.value})}
                                placeholder="Password"/>
                            <div onClick={this.showHide} className="toggle-icon">
                                {this.state.togglePass ?
                                    <FaRegEye/> :
                                    <FaRegEyeSlash/>}
                            </div>
                        </div>
                        <div className="form-pass">
                            <input
                                type={this.state.type}
                                onChange={event => this.setState({confirmPassword: event.target.value})}
                                placeholder="Confirm Password"/>
                        </div>

                        <Spin spinning={this.state.loading} indicator={antIcon} delay={500}>
                            <button className="btn" onClick={this.register}>Register</button>
                        </Spin>
                        <Divider style={{margin: '10px'}} plain>Or</Divider>
                        <div className="login-with">
                            <div className="item icon"><FcGoogle/></div>
                            <div className="item">
                                Sign up with Google
                            </div>
                        </div>
                        <p>Already have account? <Link to="/auth/login">Login</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupComponent