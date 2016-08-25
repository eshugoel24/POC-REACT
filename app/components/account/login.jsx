import React from 'react';
import axios from 'axios';

import 'dist/stylesheets/main.css'

class Login extends React.Component {
    constructor() {
        super();
        this.state = { message: '' };
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(e) {
        var self = this;
        e.preventDefault();

        axios.post('api/auth', { username: self.refs.username.value, password: self.refs.password.value })
            .then(function (response) {
                if (response.status === 200 && response.data.success) {

                } else {
                    self.setState({ message: 'invalid login details' });
                }

            }).catch(function (err) {
                self.setState({ message: 'something went wrong, try after some time' });
            });

    }

    render() {
        return (
            <div className="login-container">
            <h1>Login</h1>
            <p>Fill out the form below to login to my super awesome imaginary control panel.</p>
            <form onSubmit={this._onSubmit}>
                <input className="type-text" type='text' ref='username' placeholder='username'></input><br/>
                <input className="type-text" type='password' ref='password' placeholder='password'></input><br/>
                <button className="button btn-primary" type='submit'>Login</button>
                <p style={{ color: 'red' }}>{this.state.message}</p>
            </form>
            </div>
        );
    }
};

export default Login;