import React from 'react';

class MainLayout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Header</h1>
                <h1>navigation</h1>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
export default MainLayout;