import React from "react";
import Api from "./../../api";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import Spinner from "../loader";

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
            togglePass: true,
            errors: {},
            errorMessage: ''
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

    validateData() {
        let errors = {};
        let formIsValid = true;
        if (this.state.username === "") {
            formIsValid = false;
            errors["username"] = "Username cannot be empty";
        }
        if (typeof this.state.email !== "undefined") {
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&
                this.state.email.indexOf('@@') === -1 &&
                lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Invalid email address";
            }
        }
        if (this.state.email === "") {
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }

        if (this.state.password === "") {
            formIsValid = false;
            errors["password"] = "Password cannot be empty";
        }
        if (this.state.confirmPassword !== this.state.password) {
            formIsValid = false;
            errors["confirmPassword"] = "Password and confirm password do not match";
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    register(event) {
        event.preventDefault();
        this.setState({errors: {}})
        if (this.validateData()) {
            this.setState({loading: true})
            Api.post(`/create-account`, {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    if (res.data.success) {
                        this.setState({loading: false})
                        this.props.history.push('/');
                    }
                }).catch(error => {
                this.setState({loading: false})
                let errors = {};
                let errorMessage = error.response.data.error_message
                if (errorMessage === 'Email address already used') {
                    errors["email"] = errorMessage;
                } else if (errorMessage === 'Username already used') {
                    errors["username"] = errorMessage;
                } else if (errorMessage === 'Password should contain a uppercase letter.') {
                    errors["password"] = errorMessage;
                } else if (errorMessage === 'Password should contain a lowercase letter.') {
                    errors["password"] = errorMessage;
                } else if (errorMessage === 'Password should contain a digit.') {
                    errors["password"] = errorMessage;
                } else if (errorMessage === 'Password should be atleast 8 characters.') {
                    errors["password"] = errorMessage;
                } else {
                    this.setState({errorMessage: errorMessage})
                }
                this.setState({errors: errors});
                this.setState({loading: false})
            })
        }
    }

    render() {
        return (
            <div className="container-fluid forms">
                <div className="form-container col-s-7 col-5">
                    <div className="title">
                        <h1 className="center-text">
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
                        <span className="auth-error">{this.state.errors["username"]}</span>
                        <div className="form-input">
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={event => this.setState({email: event.target.value})}
                                placeholder="Email"/>
                        </div>
                        <span className="auth-error">{this.state.errors["email"]}</span>
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
                        <div className="form-pass">
                            <input
                                type={this.state.type}
                                onChange={event => this.setState({confirmPassword: event.target.value})}
                                placeholder="Confirm Password"/>
                        </div>
                        <span className="auth-error">{this.state.errors["confirmPassword"]}</span>

                        {this.state.loading ?
                            <button className="btn">
                                <Spinner/><span className="button-text">Creating account ...</span></button> :
                            <button className="btn" onClick={this.register}>Register</button>}
                        <p className="center-text">Already have account? <Link to="/auth/login">Login</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupComponent