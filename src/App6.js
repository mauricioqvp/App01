import React, { Component } from "react";
import Membro from "./components/Membro";

class App4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({ hora: new Date().toLocaleTimeString()})
    },0);
  }

  componentDidUpdate(){
    console.log('Arualizou!!!');
  }

  render() {
    return (
      <div>
        <h1>Hora</h1 >
        <p>{this.state.hora}</p>
        <Membro nome="Maurício"/>
        <Membro nome="Marcelo"/>
        <Membro nome="Carla"/>
      </div>
    )
  };
}

export default App4;