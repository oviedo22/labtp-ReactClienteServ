import React, {Component} from 'react';
import Navigation from './Navigation';
import Tarjeta from './Tarjeta';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Home extends Component{
    
  _isMounted = false;

  constructor(){
    super();
    this.state = ({
      db:[],
    });
    
  }

  //LEER Teoria https://es.reactjs.org/docs/react-component.html#overview
  //Este método se invoca inmediatamente después de que un componente se monte 
  //este es un buen lugar para instanciar la solicitud de red.
  componentDidMount(){
    this._isMounted = true;
    this.getPlatosServer();
  }

  //Este método es llamado cuando un componente se elimina del DOM
  componentWillUnmount(){
    this._isMounted = false;
  }

  getPlatosServer(){
    fetch('http://localhost:9000/api/paises')
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({db: responseJson});
    });
    
  }

  render(){
    const platos = this.state.db.map((plato, i)=>{return (
      //<div>{plato.nombre}</div>
      <Tarjeta key={plato.id} id={plato.id} nombre={plato.nombre} precio={plato.precio} rubro={plato.rubro} imagenPath={plato.imagenPath}></Tarjeta>
    )
  })
    return (
      <React.Fragment>
          <Navigation></Navigation>
          <Container fluid="md">
              <Row>
              {platos}
              </Row>
          </Container>
      </React.Fragment>
      );

  }
}

export default Home;