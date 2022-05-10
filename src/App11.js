import React, { Component } from 'react';
import './assets/css/styles45.css';
import imagem from './assets/imgs/cronometro.png';

/* Udemy
*  Capítulo 45 - Curso React Js do zero ao avançado na prática
*  Relógio, prj
*/
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'VAI'
        };
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'VAI';
        }else{
            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);
        state.botao = 'PAUSAR';
        }
        this.setState(state);
    }

    limpar(){
    if(this.timer !== null){
        clearInterval(this.timer);
        this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);
}

    render() {
        return (
            <div className="container">
                <img src={imagem} className="img" alt="clique nos botões"/>
                <p className="timer">{this.state.numero.toFixed(1)}</p>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        );
    }
}

export default App;