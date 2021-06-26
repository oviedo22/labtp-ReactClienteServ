import React, {Component} from 'react';

class MiComponente extends Component{
    
    render(){
        return (
            <React.Fragment>
                <h1>{this.props.textoH1}</h1>
                <h2>{this.props.textoH2}</h2>
            </React.Fragment>
            
        );

    }
}

export default MiComponente;