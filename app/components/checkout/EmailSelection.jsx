import React from 'react';

class EmailSelection extends React.Component {
    constructor(props) {
        super(props);
        this._addEmail = this._addEmail.bind(this);
    }

    _addEmail() {
        debugger
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
                        emails.map(function (email) {
                            return <li key={email}><input type="radio" name="emailGp" value={email}/>{email}</li>
                        })
                    }
                </ul>
                <button onClick={this._addEmail }>Add new email</button>
            </div>
        );
    }
}

EmailSelection.defaultProps = { emails: ['vishals@exzeoindia.com'] };

export default EmailSelection;