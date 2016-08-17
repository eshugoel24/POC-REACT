var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Cart from 'Cart';
import Checkout from './checkout/Checkout'

var data = ['test1','test2'];

ReactDOM.render(
		
		<Router history={hashHistory}>
    		<Route path="/" component={() => <Cart productNames={data}/>} >
       		 	<IndexRoute component={() => <Cart productNames={data}/>} />
    		</Route>
    		<Route path="/checkout" component={Checkout} >
    			<IndexRoute component={Checkout} />
    		</Route>
		</Router>,  document.getElementById("app")
);
