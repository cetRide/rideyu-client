import React from "react";
import {Divider, Spin, message, notification} from 'antd';
import {Link} from "react-router-dom";
import Api from "../../api"
import {LoadingOutlined, SmileOutlined} from "@ant-design/icons";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            username: '',
            email: '',
            password: ''
        };
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        document.title = "Rideyu | Login";
    }

    login(event) {
        this.setState({loading: true})
        event.preventDefault()
        Api.post(`/account/login`, {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                if (res.data.status) {
                    notification.open({
                        message: 'Sign up',
                        description: res.data.message,
                        icon: <SmileOutlined style={{color: '#108ee9'}}/>,
                        placement: "bottomLeft",
                        className: 'custom-class',
                    });
                    this.setState({loading: false})
                    this.props.history.push('/');
                } else {
                    message.error(res.data.message)
                }
            })
    }

    render() {
        const antIcon = <LoadingOutlined style={{fontSize: 34, color: 'white'}} spin/>;
        return (
            <div className="container-fluid forms">
                    <div className="form-container col-s-7 col-5">
                        <div className="title">
                            <h1>
                                Sign in
                            </h1>
                        </div>
                        <div className="form-input-container">
                            <div className="form-input">
                                <input
                                    type="text"
                                    placeholder="Username or Email"/>
                            </div>
                            <div className="form-input">
                                <input
                                    type="password"
                                    placeholder="Password"/>
                            </div>
                            <Spin spinning={this.state.loading} indicator={antIcon} delay={500}>
                                <button className="btn" onClick={this.login}>Login</button>
                            </Spin>
                            <Divider plain>Or login with</Divider>
                            <div className="social-login">
                                <div className="icon">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt=""/>
                                </div>
                                <div className="icon">
                                    <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt=""/>
                                </div>
                            </div>
                            <p>Forgot <a href="/">Username / Password?</a></p>
                            <p><Link to="/auth/register">Create Account</Link></p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default LoginComponent