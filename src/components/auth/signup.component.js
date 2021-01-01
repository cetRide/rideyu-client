import React from "react";
import {notification,message, Spin, Divider} from "antd";
import {SmileOutlined, LoadingOutlined} from '@ant-design/icons';
import Api from "./../../api";

import {Link} from "react-router-dom";

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.state = {
            loading: false,
            username: '',
            email: '',
            password: ''
        };
    }
    componentDidMount() {
        document.title = "Rideyu | Signup";
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
            <div className="container-fluid">
                <div className="login col-s-7 col-4">
                    <div>
                        <h1>
                            Create Account
                        </h1>
                    </div>
                    <div className="login-form">
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
                                placeholder="Email Address"/>
                        </div>
                        <div className="form-input">
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={event => this.setState({password: event.target.value})}
                                placeholder="Password"/>
                        </div>

                        <Spin spinning={this.state.loading} indicator={antIcon} delay={500}>
                            <button className="btn" onClick={this.register}>Register</button>
                        </Spin>
                        <Divider plain>Or Signup with</Divider>
                        <div className="social-login">
                            <div className="icon">
                                <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt=""/>
                            </div>
                            <div className="icon">
                                <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt=""/>
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