import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nro1:'',
            nro2:''

        }
      }
    
    submitHandler = (e) =>{
       
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
       
        e.preventDefault();
        console.log(this.state);
        
        //npm install axios –save
        axios.get("http://localhost:9000/api/paises", {
            params: {
                action:'sumar',
                nro1: this.state.nro1,
                nro2: this.state.nro2
            }
          })
        .then(response => {
            console.log(JSON.stringify(response));
            console.log("El resultado es " +  response.status);
            document.getElementById('txtResultado').innerHTML = "El resultado es <b>" +  response + "</b>";   
            this.setState({nro1: ''});
            this.setState({nro2: ''});
        })
        .catch(error =>{
            console.log("Error");
            console.log(error);
        })
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }  
   
    render() {
        const {nro1, nro2} = this.state
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <div className="center">
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Numero 1</Form.Label>
                        <Form.Control name="nro1" id="nro1" value={nro1} onChange={this.changeHandler} type="number" placeholder="Ingrese un numero" required/>
                        <Form.Text className="text-muted">
                        Numeros enteros
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro2">
                        <Form.Label>Numero 2</Form.Label>
                        <Form.Control name="nro2" id="nro2" value={nro2} onChange={this.changeHandler} type="number" placeholder="Ingrese un numero" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNro2">
                        <Form.Label id="txtResultado"></Form.Label>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default Formulario;