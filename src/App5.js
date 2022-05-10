import React, { Component } from "react";

class App4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'digite seu nome',
      rua: 'digite sua rua',
      numero: 'digite o número da casa'
    }

    this.atualizar = this.atualizar.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  atualizar(event){
    let nomeEntrada = event.target.value;
    let rua = event.target.value;
    let numero = event.target.value;
    this.setState({nomeEntrada, rua, numero});
    if (nomeEntrada === 'oi' ) { 
      console.log(nomeEntrada);
    } else {
      console.log('Não foi a resposta esperada...');
    }
    console.log(`${this.state.nome}`);
    event.preventDefault();
  }

  cadastrar(event){
    const meu = this.state;

    meu.nome = event.target.nome;
    meu.rua = event.target.rua;
    meu.numero = event.target.numero;

    event.preventDefault();
   console.log(meu);
  }

  render() {
    return (
      <div>
        <h1>Cadastro de Clientes</h1 >
        <h2>Seção eleitoral</h2>
        <form onSubmit={this.cadastrar}>
          <p>{this.state.nome}</p>
          <label>Nome:</label>
          <input type="text" defaultValue={this.state.nome} 
                onChange={this.atualizar} /><br />
          <label>Rua:</label>
          <input type="text" defaultValue={this.state.rua}
                onChange={this.atualizar} /><br />
          <label>Número:</label>
          <input type="text" defaultValue={this.state.numero}
                onChange={this.atualizar} /><br />
          <button type="submit">Submeter</button>
        </form>
      </div>
    )
  };
}

export default App4;