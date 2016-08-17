var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Cart from 'Cart';

var data = ['test1','test2'];


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
