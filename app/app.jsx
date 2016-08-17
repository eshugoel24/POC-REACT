var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Cart from 'Cart';
import Checkout from './checkout/Checkout';
import Email from './checkout/EmailSelection'
import PaymentInfo from './checkout/PaymentInfo';

var data = ['test1','test2'];
var emails = ['vishal@exzeoindia.com', 'rahul@exzeoindia.com'];

ReactDOM.render(
		
		<Router history={hashHistory}>
    		<Route path="/" component={() => <Cart productNames={data}/>} >
       		 	<IndexRoute component={() => <Cart productNames={data}/>} />					
    		</Route>    		
			<Route path="checkout" component={Checkout} >
    				<IndexRoute component={() => <Email emails={emails}/>} />
					<Route path="payment" component={PaymentInfo}/>
    			</Route>
		</Router>,  document.getElementById("app")
);
