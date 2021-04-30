import React from "react";
import {Link} from "react-router-dom";
import Api from "../../api"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import Spinner from "../loader";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            username: '',
            password: '',
            type: 'password',
            togglePass: true,
            errorMessage: '',
            errors: {}
        };
        this.userLogin = this.userLogin.bind(this);
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

    handleValidation() {
        let username = this.state.username;
        let errors = {};
        let formIsValid = true;
        if (username === "") {
            formIsValid = false;
            errors["username"] = "Username cannot be empty";
        }
        if (this.state.password === "") {
            formIsValid = false;
            errors["password"] = "Password cannot be empty";
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    userLogin(event) {
        event.preventDefault()
        const user_credentials = {
            usernameoremail: this.state.username,
            password: this.state.password
        };
        this.setState({errors: {}})
        if (this.handleValidation()) {
            this.setState({loading: true})
            Api.post(`/login`, user_credentials).then(res => {
                if (res.data.success) {
                    this.setState({loading: false})
                    this.props.history.push('/');
                }
            }).catch(error => {
                let errors = {};
                let errorMessage = error.response.data.error_message
                if (errorMessage === 'Incorrect password') {
                    errors["password"] = errorMessage;
                } else if (errorMessage === 'Incorrect username') {
                    errors["username"] = errorMessage;
                } else {
                    this.setState({errorMessage: errorMessage})
                }
                this.setState({errors: errors});
                this.setState({loading: false})

            });
        }
    }

    render() {
        return (
            <div className="container-fluid forms">
                <div className="form-container col-5 col-s-8">
                    <div className="title">
                        <h1 className="center-text">
                            Sign in
                        </h1>
                    </div>
                    <div className="auth-error">
                        {this.state.errorMessage}
                    </div>
                    <div className="form-input-container">
                        <div className="form-input">
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={event => this.setState({username: event.target.value})}
                                placeholder="Username or Email"/>
                        </div>
                        <span className="auth-error">{this.state.errors["username"]}</span>
                        <div className="form-pass">
                            <input
                                type={this.state.type}
                                onChange={event => this.setState({password: event.target.value})}
                                placeholder="Password"/>
                            <div onClick={this.showHide} className="toggle-icon">
                                {this.state.togglePass ?
                                    <FontAwesomeIcon icon={faEye}/> :
                                    <FontAwesomeIcon icon={faEyeSlash}/>}
                            </div>
                        </div>
                        <span className="auth-error">{this.state.errors["password"]}</span>
                        <div className="center-text">Forgotten your <a href="/">password?</a></div>
                        {this.state.loading ?
                            <button className="btn">
                                <Spinner/><span className="button-text">Signing in</span></button> :
                            <button className="btn" onClick={this.userLogin}>Login</button>}
                        <p className="center-text">Don't have an account yet? <Link to="/auth/register">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent