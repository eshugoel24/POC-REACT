import React from 'react';
import ReactDOM from 'react-dom';

class EmailSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    _addEmail() {
        if (typeof this.props.addEmail === 'function') {
            this.props.addEmail();
        }
            
    }

    render() {
        var emails = this.props.emails;
        return (
            <div id="email_selection">
                <h4>Selected email address will get the download link.</h4>
                <ul>
                {
                    emails.map(function(email){
                        return <li><input type="radio" name="emailGp" value={email}/>{email}</li>
                    })
                }
                </ul>
                <button onClick={this._addEmail.bind(this)}>Add new email</button>
            </div>
        );
    }
}

EmailSelection.defaultProps = {emails: ['vishals@exzeoindia.com']};

export default EmailSelection;