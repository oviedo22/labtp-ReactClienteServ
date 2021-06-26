import React, {Component} from 'react';
import Navigation from './Navigation';

class Cliente extends Component{
    
    render(){
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <h1>CLIENTE</h1>
            </React.Fragment>
        );

    }
}

export default Cliente;