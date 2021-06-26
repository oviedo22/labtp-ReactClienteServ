import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Navigation from './Navigation';

class CicloVidaReact extends Component {
    render() {
        return (
            <div className="center90">
                <Navigation></Navigation>
                <h1>Ciclo de vida de un componente de React.js</h1>
                <p>
                En React.js los componentes que no sean puros (todos los que se crean mediante clases o React.createClass) poseen algo conocido como el ciclo de vida. Este ciclo de vida son una serie de funciones que se ejecutan en distintos momentos de la vida del componente y nos permiten realizar distintas acciones en estos momentos.
                <br/>
                <br/>
                <h4>Fases del ciclo de vida</h4>
                <br/>
                El ciclo de vida se puede dividir en 3 fases, el montado, actualización y desmontado del componente. Estas fases a su vez se dividen en varios métodos que puede tener el componente.
                <br/>
                Tip: Cada método tiene un prefijo will o did dependiendo de si ocurren antes o después de cierta acción.
                <br/>
                </p>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="montado" title="Montado" className="txtJustificado">
                    La primera fase ocurre solo una vez por componente cuando este se crea y monta en la UI. Esta fase se divide en 4 funciones.
                    <br/><br/>
                    <b>constructor(props)</b>
                    <br/>
                    Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del componente, hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferentes, por ejemplo la instancia de una clase (un parser, un validador, etc.).
                    <br/><br/>
                    <b>bomponentWillMount()</b>
                    <br/>
                    Este método se ejecuta cuando el componente se está por renderizar. En este punto es posible modificar el estado del componente sin causar una actualización (y por lo tanto no renderizar dos veces el componente). Es importante sin embargo evitar causar cualquier clase de efecto secundario (petición HTTP por ejemplo) ya que este método se ejecuta en el servidor y hacer esto puede causar problemas de memoria.
                    <br/><br/>
                    <b>render()</b>
                    <br/>
                    En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente. Esta función debe ser pura (no puede tener efectos secundarios) y no debe modificar nunca el estado del componente.
                    <br/>
                    Actualizar el estado en este punto puede causar un ciclo infinito de renderizados, ya que cada cambio al estado genera que el componente se renderice de nuevo (y vuelva a cambiar el estado).
                    <br/><br/>
                    <b>componentDidMount()</b>
                    <br/>
                    Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador (este no se ejecuta al renderizar en el servidor) y nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).
                    <br/>
                    También es el mejor lugar para realizar peticiones HTTP o suscribirse a diferentes fuentes de datos (un Store o un WebSocket) y al recibir una respuesta, actualizar el estado. Cambiar el estado en este método causa que se vuelva a renderizar el componente.
                    </Tab>
                    <Tab eventKey="actualizar" title="Actualización" className="txtJustificado">
                    Esa fase puede ocurrir múltiples veces (o incluso ninguna), sucede cuando algún dato del componente (ya sea una propiedad, un estado o el contexto) se modifica y por lo tanto requiere que la UI se vuelva a generar para representar ese cambio de datos.
                    <br/><br/>
                    <b>componentWillReceiveProps(nextProps)</b>
                    <br/>
                    Este método se ejecuta inmediatamente después que el componente reciba nuevas propiedades. En este punto es posible actualizar el estado para que refleje el cambio de propiedades, ya sea reiniciando su valor inicial o cambiándolo por uno nuevo.
                    <br/>
                    Hay que tener en cuenta que React puede llegar a ejecutar este método incluso si las propiedades no cambiaron. Por eso es importante validar que las nuevas propiedades (nextProps) sean diferentes de las anteriores (this.props).
                    <br/><br/>
                    <b>shouldComponentUpdate(nextProps, nextState)</b>
                    <br/>
                    Este método (el cual debe ser puro) se ejecuta antes de empezar a actualizar un componente, cuando llegan las nuevas propiedades (nextProps) y el nuevo estado (nextState).
                    <br/>
                    Acá es posible validar que estos datos sean diferentes de los anteriores (this.props y this.state) y devolver true o false dependiendo de si queremos volver a renderizar o no el componente.
                    <br/>
                    Los componentes creados al extender React.PureComponent implementan esta validación sin necesidad de que hagamos nada y de una forma que no afecte al rendimiento. El resto de componentes devuelven siempre true por defecto.
                    <br/>
                    Hay que tener cuidado con este método ya que si nuestro componente tiene otros componentes con estado como hijos, devolver false acá puede impedir que estos sub-componentes no se actualicen al detectar un cambio.
                    <br/><br/>
                    <b>componentWillUpdate(nextProps, nextState)</b>
                    <br/>
                    Una vez el método anterior devolvió true se ejecuta este método, acá es posible realizar cualquier tipo de preparación antes de que se actualice la UI.
                    <br/>
                    Es importante tener encuenta que acá no se puede ejecutar this.setState para actualizar el estado. Si queremos actualizar el estado con base a un cambio de propiedades debemos hacerlo en componentWillReceiveProps.
                    <br/><br/>
                    <b>render()</b>
                    <br/>
                    Al igual que en el montado acá se va a generar la UI, esta vez con los datos que hayan cambiado. Como antes este método debe ser puro.
                    <br/><br/>
                    <b>componentDidUpdate(prevProps, prevState)</b>
                    <br/>
                    Esta última parte de la actualización de un componente ocurre justo después de que se renderiza en el DOM nuestro componente. Al igual que con componentDidMount() acá es posible interactuar con el DOM y cualquier API de los navegadores.
                    <br/>
                    Aunque acá podríamos realizar una petición HTTP y actualizar el estado hay que tener cuidado, ya que de hacerlo podríamos causar un bucle infinito de actualizaciones y peticiones HTTP.

                    </Tab>
                    <Tab eventKey="desmontado" title="Desmontado" className="txtJustificado">
                    Esta última fase consiste en un solo método que se ejecuta antes de que un componente se elimine (desmonte) de la UI de nuestra aplicación.
                    <br/><br/>
                    <b>componentWillUnmount()</b>
                    <br/>
                    Este único método de la fase de desmontado nos permite realizar cualquier tipo de limpieza antes de remover el componente.
                    <br/>
                    Acá es posible dejar de escuchar eventos de window, document o el DOM, desuscribirse de un WebSocket o Store o cancelar peticiones HTTP que hayan quedado pendientes.
                    <br/>
                    Es importante hacer esta limpieza ya que si alguna petición pendiente se completa luego del desmontado, va a tratar de actualizar el estado y va a dar un error (y hasta un posible problema de memoria) ya que el componente no existe más.
                    <br/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default CicloVidaReact;