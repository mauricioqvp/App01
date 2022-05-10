import React, { Component } from "react";

class App4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'digite seu nome',
      email: 'valor@padrao.com',
      senha: '1234567'
    };

    //this.preencher = this.preencher.bind(this);
    this.submeter = this.submeter.bind(this);
  }

  submeter(event) {
    event.preventDefault();
    let state = this.state;
    state.nome = event.value.nome;
    state.email = event.value.email;
    state.senha = event.value.senha;
    this.setState(state);
    console.log('Submeteu!');
  }

  render() {
    return (
      <form onSubmit={this.submeter}>
        <h2>Ficha de cadastro:</h2>
        <label>Nome:</label>
        <input type="text" value={this.state.nome} 
                onChange={(e) =>  this.setState({nome: e.target.value})} 
                /><br />
        <label>Email:</label>
        <input type="email" value={this.state.email} 
                onChange={(e) =>  this.setState({email: e.target.value})} 
                /><br />
        <label>Senha:</label>
        <input type="password" value={this.state.senha} 
                onChange={(e) =>  this.setState({senha: e.target.value})} 
                /><br />
        <button type="submit" >Submeter</button>
      </form>
    );
  }
}

export default App4;