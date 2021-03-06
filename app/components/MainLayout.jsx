import React from 'react';

import 'dist/stylesheets/main.css'

class MainLayout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="header"><h1>Header</h1></div>
                <h1>navigation</h1>
                <div className="mainLayout">
                <main>
                    {this.props.children}
                </main>
                </div>
                <div className="footer">
                    <ul>
                        <li>&copy; Copyright 2016.</li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default MainLayout;