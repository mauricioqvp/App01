import React, { Component } from 'react';
import './assets/css/styles46.css';

/* Udemy
*  Exercício meu -Curso React Js do zero ao avançado na prática
*  Índices de saúde, prj
*/
class Barra extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: 0
        };

        this.aumentar = this.aumentar.bind(this);
    }

    aumentar() {
        setInterval(()=>{
            let dados = this.state.valor;
            dados += Math.floor(Math.random() * 4 -2);
                this.setState({valor: dados})
        },1000);
    }

    render(props) {
        return (
            <div className="container">
                {/* <p>The meter element is used to display a gauge:</p>

                <label for="disk_c">Água:</label>
                <meter id="disk_c" value="9" min="0" max="10">2 out of 10</meter>

                */}
                <label for="disk_d">Sódio:</label>
                <meter id="disk_d" value={this.state.valor} min="-10" max="10" >para quê serve</meter>

                <p className="botao" onClick={this.aumentar}>Aumentar</p>
            </div>
        );
    }
}

export default Barra;