import React from 'react';
import ReactDOM from 'react-dom';

class ListCategory extends React.Component{
    constructor(props){
        super(props);
    };
    _parseItems(items) {
        
    }
    render(){
        var items = this.props.listItem;
        return(
            <div> 
                <ul>
                {
                    items.map(function(item, i) {
                    return <li key={i}>{item}</li>
                    })
                }
                </ul>
            </div>
        );
    }
};

export default ListCategory;
