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
                frequencia: '-1',
                mensagems: 'Registro 123 (apenas para testes)'
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

    async function update() {
        await firebase.firestore().collection('fichas')
            .doc('123')
            .update({
                frequencia: freq,
                mensagems: msg
            })
            .then(() => {
                alert('Update realizado com sucesso!');
            })
            .catch(() => {
                alert('ERRO AO TENTAR O UPDATE');
            })
    }

    async function excluir(){
        await firebase.firestore().collection('fichas')
        .doc('123')
        .delete()
        .then(()=>{
            alert('Registro Id 123, excluído com sucesso!')
            setFreq('0');
            setMsg('');
        })
        .catch(()=>{
            alert('Erro ao tentar excluir o registro 123');
        })
    }

    useState(() => {
        async function buscarTodos() {
            await firebase.firestore().collection('fichas')
                .get()
                .then((snapshot) => {
                    // ATENÇÃO: este recurso extressa seu BD!
                    //.onSnapshot((snapshot) => {
                    let itens = [];

                    snapshot.forEach((doc) => {
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

    }, []);

    return (
        <div>
            <h2>Adiciona dos dados ao BD:</h2>
            <label>Frequencia:</label>
            <input type="text" name="frequencia" value={freq} onChange={(e) => { setFreq(e.target.value) }} /><br />
            <label>Mensagem:</label>
            <textarea cols="60" rows="10" value={msg} onChange={(e) => { setMsg(e.target.value) }} /><br />
            <button onClick={cadastrar}>Cadastrar Id 123</button>
            <button onClick={ler}>Ler id: 123</button>
            <button onClick={cadastrarIdAutomatico}>Cadastro com Id automatico</button>
            <button onClick={update}>Update cadastro Id 123</button>
            <button onClick={excluir}>Excluir Id 123</button>
            <br /><br />
            <hr />
            <h2>Registros armazenados:</h2>
            {lista.map((item) => {
                return (
                    <>
                        <span key={item.id}>({item.freq})</span>
                        <strong> {item.mensagem}</strong>
                        <br />
                        <br />
                    </>
                )
            })}
        </div>
    );
}

export default AddDados;