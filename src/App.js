import React, { Component } from "react";

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} />
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Nome: {this.props.nome} </h2>
        <h3>Cargo: {this.props.cargo} </h3>
        <RedesSociais />
        <hr/>
      </div>
    );
  }
}

const RedesSociais = () => {
  return(
    <div>
      <a href="https://google.com">Facebook</a>
      <a href="https://google.com"> LinkedIn</a>
    </div>
  );
}

function App(){
  return(
    <div>
      <h2>Olá mundo</h2>
      <Equipe nome="Mauricio" cargo="programador" />
    </div>
  );
}

export default App;