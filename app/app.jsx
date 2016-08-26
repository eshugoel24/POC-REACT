import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Cart from 'Cart';
import Checkout from 'Checkout';
import Email from 'EmailSelection'
import PaymentInfo from 'PaymentInfo';
import MainLayout from 'MainLayout';
import Dashboard from 'Dashboard';
import Login from 'Login';
import Products from 'Products';
import Categories from 'ProductCategory';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={Login} />
			<Route path="dashboard" name="dashboard" component={Dashboard}/>
		</Route>
		<Route path="cart" component={() => <Cart productNames={data}/>} >
			<IndexRoute component={() => <Cart productNames={data}/>} />
		</Route>
		<Route path="checkout" name="checkout" component={Checkout} >
			<IndexRoute component={Email}/>
			<Route path="payment" component={PaymentInfo}/>
		</Route>
		<Route path="products" name="products" component={Products}>
			<IndexRoute component={Products} />
		</Route>
		<Route path="category" name="category" component={Categories}>
			<IndexRoute component={Categories} />
		</Route>
	</Router>, document.getElementById("app")
);