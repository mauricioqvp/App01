import React, { Component } from "react";

class App2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Matheus',
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    this.setState(state);
    console.log('Aumentou!');
  }

  diminuir() {
    let state = this.state;
    if (state.contador === -1) {
      alert('Opa chegou em zero!');
      return;
    }

    state.contador -= 1;
    this.setState(state);
    console.log('Diminuiu');
  }

  render() {
    return (
      <div>
        <h2>App2 - Contador</h2>
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    );
  }
}

export default App2;