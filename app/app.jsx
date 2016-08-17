var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Cart from 'Cart';
import Checkout from './checkout/Checkout'

var data = ['test1','test2'];

<<<<<<< HEAD
ReactDOM.render(
    <Checkout emails={['vishals@exzeo.com','rahul@exzeo.com']}/>,
    document.getElementById("app")
);
=======

	ReactDOM.render(
			
			<Router history={hashHistory}>
        		<Route path="/" component={() => <Cart productNames={data}/>} >
           		 <IndexRoute component={() => <Cart productNames={data}/>} />
        		</Route>
        		<Route path="/checkout" component={() => <Cart productNames={data}/>} >
           		 <IndexRoute component={() => <Cart productNames={data}/>} />
        		</Route>
   			</Router>,  document.getElementById("app")
	);
>>>>>>> 45f855745dfa43cd9648ef185870964a69d122af
