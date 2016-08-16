var React = require('react');
var ReactDOM = require('react-dom');

var obj1={
    name:'eshu',
    area: 'nagina'
};

var obj2={
    age:24,
    ...obj1
};

console.log(obj2);

ReactDOM.render(
    <h1>Hello world</h1>, 
    document.getElementById("app")
);