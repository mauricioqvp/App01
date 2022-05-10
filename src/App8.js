import React, { Component } from "react";
/* Udemy
*  Capítulo 42 - Curso React Js do zero ao avançado na prática
*/
class App7 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(e){
        const {nome, email, senha} = this.state;
        if(this.state.nome !== '' && this.state.email!== '' && this.state.senha !==''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
        } else {
            this.setState({error: 'Ops! Parece que está faltando algo!'});
        }
    }

    render() {
        return(
            <div>
                <h1>Novo usuário</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar} >
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome}
                            onChange={(e) => this.setState({nome: e.target.value})} /><br/>
                    <label>Email:</label>
                    <input type="email" value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})} /><br/>
                    <label>Senha:</label>
                    <input type="password" value={this.state.senha}
                            onChange={(e) => this.setState({senha: e.target.value})} /><br/>
                    <button type="submit">Submeter</button>
                </form>
            </div>
        );
    }
}

export default App7;