import React, {Component} from 'react';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Cliente from './components/Cliente';
import Cocina from './components/Cocina';
import DetallePlato from './components/DetallePlato';
import Formulario from './components/Formulario';
import CicloVidaReact from './components/CicloVidaReact';

class App extends Component{
    
  
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route exact path="/formulario" component={Formulario} ></Route>
        <Route path="/ciclovida" component={CicloVidaReact} ></Route>
        <Route path="/cliente" component={Cliente} ></Route>
        <Route path="/detallePlato/:id" component={DetallePlato} ></Route>
      </Switch>
    ) 
  }
}

export default App;