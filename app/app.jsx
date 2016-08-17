var React = require('react');
var ReactDOM = require('react-dom');
import Cart from 'Cart';
import Checkout from './checkout/Checkout'


ReactDOM.render(
    <Checkout emails={['vishals@exzeo.com','rahul@exzeo.com']}/>,
    document.getElementById("app")
);
