import React from 'react';
import ReactDOM from 'react-dom';

class ErrorMessage extends React.Component{
  constructor(props){
    super(props);
  };
render(){
  const mystyle = {
    display:'none',
    font:'red'
  };
  return(
    <span style={mystyle}>{this.props.errMessage}</span>
  );
}
};

export default ErrorMessage;
