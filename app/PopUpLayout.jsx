import React from 'react';
import ReactDOM from 'react-dom';

class PopUp extends React.Component{
      constructor(props){
        super(props);
      }
      _closePopUp(){
          ReactDOM.findDOMNode(this.refs.dvPopUp).destroy();
      }
      //Need to pass popup header,popup html,popup buttons,popup style from outside
      render(){
        debugger
        return(
            <div ref='dvPopUp'>
                <span>{this.props.headerText}<label onClick={this._closePopUp.bind(this)}>X</label></span>
                <div>{this.props.contentDiv}</div>
                <textarea></textarea>
                <button type='submit'>OK</button>
            </div>
                );
      }
};

export default PopUp;
