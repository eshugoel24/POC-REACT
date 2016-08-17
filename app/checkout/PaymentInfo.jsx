import React from 'react';
import ReactDOM from 'react-dom';

class PaymentInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="PaymentOptions">
                <ul>
                    <li><input type="radio" name="payOption" value="Credit Card"/>Credit Card</li>
                    <li><input type="radio" name="payOption" value="Debit Card"/>Debit Card</li>
                    <li><input type="radio" name="payOption" value="Paypal"/>Paypal</li>
                </ul>
                <button name="makePayment">Make payment</button>
            </div>
        );
    }
}