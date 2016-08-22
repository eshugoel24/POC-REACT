import React from 'react';
import Email from './EmailSelection';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emails: ['vishals@exzeo.com', 'rahul@exzeo.com'] };
    }

    _addEmail() {
        var self = this;
        var newEmail = prompt("Enter new email:");
        var emails = this.state.emails;
        
        if (newEmail !== null) {
            if (self._validateEmail(newEmail)) {
                debugger;
                emails.push(newEmail);
                self.setState({ emails: emails });
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
        return this.props.children;
    }

};

export default Checkout;