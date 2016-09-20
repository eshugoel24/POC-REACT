import React from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import Validations from '../../../validations/validations';
import 'dist/stylesheets/main.css'
import ErrorMessage from '../../../validations/ErrorMessage';

class Login extends React.Component {
    constructor() {
        super();
        this.state = { message: '' };
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(e) {
        var self = this;
        e.preventDefault();
        if(!Validations.isRequired(self.refs.username.value.trim()) && !Validations.isRequired(self.refs.password.value.trim()) ){
            ReactDOM.findDOMNode(this.refs.errusername).setAttribute('style','display:block');
            ReactDOM.findDOMNode(this.refs.errpassword).setAttribute('style','display:block');
        }
        else if(!Validations.isRequired(self.refs.password.value.trim())){
            ReactDOM.findDOMNode(this.refs.errpassword).setAttribute('style','display:block');
            ReactDOM.findDOMNode(this.refs.errusername).setAttribute('style','display:none');
        }
        else if(!Validations.isRequired(self.refs.username.value.trim())){
            ReactDOM.findDOMNode(this.refs.errusername).setAttribute('style','display:block');
            ReactDOM.findDOMNode(this.refs.errpassword).setAttribute('style','display:none');
        }
        else{
            ReactDOM.findDOMNode(this.refs.errusername).setAttribute('style','display:none');
            ReactDOM.findDOMNode(this.refs.errpassword).setAttribute('style','display:none');
            axios.post('api/auth', { username: self.refs.username.value, password: self.refs.password.value })
            .then(function (response) {
                if (response.status === 200 && response.data.success) {
                     browserHistory.push('/dashboard');
                } else {
                    self.setState({ message: 'invalid login details' });
                }

            }).catch(function (err) {
                self.setState({ message: 'something went wrong, try after some time' });
            });
        }

    }

    render() {
        return (
            <div className="login-container">
            <h1>Login</h1>
            <p>Fill out the form below to login to my super awesome imaginary control panel.</p>
            <form onSubmit={this._onSubmit}>
                <input className="type-text" type='text' ref='username' placeholder='username'></input><br/>
                <ErrorMessage ref="errusername" errMessage='UserName Field is reuired'></ErrorMessage>
                <input className="type-text" type='password' ref='password' placeholder='password'></input><br/>
                <ErrorMessage ref="errpassword" errMessage='Password Field is reuired'></ErrorMessage>
                <button className="btn btn-primary" type='submit'>Login</button>
                <p style={{ color: 'red' }}>{this.state.message}</p>
            </form>
            </div>
        );
    }
};

export default Login;
