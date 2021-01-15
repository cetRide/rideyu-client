import React from "react";
import {Divider, Spin, message, notification} from 'antd';
import {Link} from "react-router-dom";
import Api from "../../api"
import {LoadingOutlined, SmileOutlined} from "@ant-design/icons";
import {FcGoogle} from "react-icons/fc";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            username: '',
            email: '',
            password: '',
            type: 'password',
            togglePass: true
        };
        this.login = this.login.bind(this);
        this.showHide = this.showHide.bind(this);
    }

    showHide() {
        this.setState({
            type: this.state.type === 'password' ? 'input' : 'password',
            togglePass: this.state.type !== 'password'
        })
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
                <div className="form-container col-5 col-s-8">
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
                        <div className="form-pass">
                            <input
                                type={this.state.type}
                                placeholder="Password"/>
                            <div onClick={this.showHide} className="toggle-icon">
                                {this.state.togglePass ?
                                    <FaRegEye/> :
                                    <FaRegEyeSlash/>}
                            </div>
                        </div>
                        <div>Forgot <a href="/">Username / Password?</a></div>
                        <Spin spinning={this.state.loading} indicator={antIcon} delay={500}>
                            <button className="btn" onClick={this.login}>Login</button>
                        </Spin>
                        <Divider style={{margin: '10px'}} plain>Or</Divider>
                        <div className="login-with">
                            <div className="item icon"><FcGoogle/></div>
                            <div className="item">
                                Login with Google
                            </div>
                        </div>
                        <p>Don't have an account yet? <Link to="/auth/register">Sign up</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent