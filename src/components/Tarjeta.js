import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Tarjeta extends Component{
    
    render(){
        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }} className="margenesTarjeta"> 
                <Card.Img />
                <Card.Body>
                    <Card.Title>{this.props.nombre}</Card.Title>
                    <Card.Text>
                    ${this.props.precio}
                    </Card.Text>
                    <Button href={`detallePlato/${this.props.id}`} variant="primary">Detalle</Button>
                </Card.Body>
                </Card>
            </React.Fragment>
            
        );

    }
}

export default Tarjeta;