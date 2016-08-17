var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var MainLayout = require('MainLayout');
var Dashboard = require('Dashboard');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Dashboard} />
        </Route>
    </Router>, 
    document.getElementById("app")
);