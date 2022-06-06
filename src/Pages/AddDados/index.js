// BD 'estudo' no Firebase
import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';

function AddDados() {
    const [freq, setFreq] = useState(0);
    const [msg, setMsg] = useState('');
    const [lista, setLista] = useState([]);

    async function cadastrar() {
        await firebase.firestore().collection('fichas')
            .doc('123')
            .set({
                frequencia: freq,
                mensagems: msg
            })
            .then(() => {
                alert('Dados cadastrados com sucesso!');
                setFreq(0);
                setMsg('');
            })
            .catch((error) => {
                alert('Erro ao cadastar:', error);
            })
    }

    async function cadastrarIdAutomatico() {
        await firebase.firestore().collection('fichas')
            .add({
                frequencia: freq,
                mensagems: msg
            })
            .then(() => {
                alert('Dados cadastrados com sucesso!');
                setFreq(0);
                setMsg('');
            })
            .catch((error) => {
                alert('Erro ao cadastar:', error);
            })
    }

    async function ler() {
        await firebase.firestore().collection('fichas')
            .doc('123')
            .get()
            .then((snapshot) => {
                setFreq(snapshot.data().frequencia);
                setMsg(snapshot.data().mensagems);
                console.log('Dados lidos com sucesso! ', freq, " e ", msg);
            })
            .catch((error) => {
                alert('Erro ao cadastar:', error);
            })
    }


    useState (()=>{
        async function buscarTodos() {
            await firebase.firestore().collection('fichas')
                .get()
                .then((snapshot) => {
                    let itens = [];

                    snapshot.forEach((doc)=>{
                        itens.push({
                            id: doc.data().id,
                            freq: doc.data().frequencia,
                            mensagem: doc.data().mensagems
                        });
                    })
                    setLista(itens);
                })
                .catch((error) => {
                    alert('Erro ao listar:', error);
                })
        }
        buscarTodos();

    },[]);

    return (
        <div>
            <h2>Adiciona dos dados ao BD:</h2>
            <label>Frequencia:</label>
            <input type="text" name="frequencia" value={freq} onChange={(e) => { setFreq(e.target.value) }} /><br />
            <label>Mensagem:</label>
            <textarea cols="60" rows="10" value={msg} onChange={(e) => { setMsg(e.target.value) }} /><br />
            <button onClick={cadastrar}>Cadastrar</button>
            <button onClick={ler}>Ler id: 123</button>
            <button onClick={cadastrarIdAutomatico}>Cadastro com Id automatico</button>
            <br/><br/>
            <hr/>
            <h2>Registros armazenados:</h2>
            {lista.map((item)=>{
                return(
                    <>
                        <span key={item.id}>({item.freq})</span>
                        <strong> {item.mensagem}</strong>
                        <br/>
                        <br/>
                    </>
                )
            })}
        </div>
    );
}

export default AddDados;