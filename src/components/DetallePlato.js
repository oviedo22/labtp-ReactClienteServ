import React, {Component} from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

class DetallePlato extends Component{
    
    constructor(){
        super();
        this.state = ({
            plato:[],
          });
      }
    componentDidMount(){
    this._isMounted = true;
    this.getPlatoXIdServer();
    }

    componentWillUnmount(){
    this._isMounted = false;
    }

    getPlatoXIdServer(){
        const parametroId = this.props.match.params.id;
        fetch('http://localhost:9000/api/paises'+parametroId)
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({plato: responseJson});
        })  
    
    }  
      

    render(){
        const platoEncontrado = this.state.plato;
        if(Object.keys(platoEncontrado).length === 0){
            return ("");
        }
        console.log(platoEncontrado);
        //las imagenes estan logicamente en el servidor
        const imageurl = "" + platoEncontrado.imagenPath;
        const ingredientes = platoEncontrado.ingredientes.map((ingrediente, i)=>{return (
        <li key={i}>{ingrediente.nombre} {ingrediente.cantidad} {ingrediente.unidadMedida}</li>
          )
        })

        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container>
                <Row> 
                    <Col><br/><img alt="plato" className="minAltoImg" src={imageurl}  /></Col>
                    <Col>
                        <Row>
                            <Col><h1>{platoEncontrado.nombre}</h1></Col>
                        </Row>
                        <Row>
                        <Col>Precio: <h2>${platoEncontrado.precio}</h2></Col>
                        </Row>
                        <Row>
                            <Col>Rubro: <h2>{platoEncontrado.rubro}</h2></Col>
                        </Row>
                        <Row>
                            <Col>Ingredientes:{ingredientes}</Col>
                        </Row>
                    </Col>
                </Row>
                
                <Row>
                    <Col><Nav.Link href="/home"><h3>Volver</h3></Nav.Link></Col>
                </Row>                
                </Container>
            </React.Fragment>
        );
       
    }
}

export default DetallePlato;