import React from 'react';
import ReactDOM from 'react-dom';
import Email from './EmailSelection';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {emails: this.props.emails};
    }

    _addEmail() {
        var self = this;
        var newEmail = prompt("Enter new email:");
        if (newEmail !== null) {
            if (self._validateEmail(newEmail)) {
                var emails = this.state.emails;
                emails.push(newEmail);
                self.setState({emails: emails});
            } else {
                alert("Not a valid email.");
            }            
        }    
    }

    _validateEmail(str) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(str);    
    }

    render() {
        var userEmails = this.state.emails;
        return (
            <Email emails={userEmails} addEmail={this._addEmail.bind(this)} />
        );
    }

}

export default Checkout;