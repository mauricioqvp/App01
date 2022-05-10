import React, { Component } from 'react';
import './assets/css/styles44.css';
/* Udemy
*  Capítulo 44 - Curso React Js do zero ao avançado na prática
*  Biscoito da Sorte, prj
*/
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sorteada: 'O que o dia te reserva, hoje?'
        }

        this.sorteia = this.sorteia.bind(this);

        this.frase = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'];
    }

    sorteia(){
        let numero = Math.floor(Math.random() * this.frase.length);
        let ferasSorteada =this.frase[numero];
        this.setState({sorteada: ferasSorteada});
    }

    render() {
        return (
            <div className="container">
                <img src={require('./assets/imgs/biscoito.png')} alt="biscoito"
                        className="figura" />
                <p className="frase">{this.state.sorteada}</p>
                <button onClick={this.sorteia}>Sortear</button>
            </div>
        );
    }
}

export default App;