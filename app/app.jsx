var React = require('react');
var ReactDOM = require('react-dom');
import Cart from 'Cart';


ReactDOM.render(
    <Cart productNames={['test','test2']}/>,
    document.getElementById("app")
);
