import React, { Component } from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };
    }

    render(){
        return(
            <div>
                <h2>Membro: {this.state.nome}</h2>
            </div>
        );
    }
}

export default Membro;