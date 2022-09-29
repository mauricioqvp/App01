import React, { Component } from 'react';
//import './assets/css/styles45.css';
import Barra from './Barra';

/* Udemy
*  Capítulo 45 - Curso React Js do zero ao avançado na prática
*  Relógio, prj
*/
class App extends Component {

    render() {
        return (
            <div className="container">
                <Barra min="0" max="10" texto="água" />
                <Barra min="0" max="10" texto="água" />
                <Barra min="0" max="10" texto="água" />
                <Barra min="0" max="10" texto="água" />
            </div>
        );
    }
}

export default App;