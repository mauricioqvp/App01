// BD 'estudo' no Firebase
import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';

function AddDados() {
    const [freq, setFreq] = useState(0);
    const [msg, setMsg] = useState('');

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

    return (
        <div>
            <h2>Adiciona dos dados ao BD:</h2>
            <label>Frequencia:</label>
            <input type="text" name="frequencia" value={freq} onChange={(e) => { setFreq(e.target.value) }} /><br />
            <label>Mensagem:</label>
            <textarea cols="60" rows="10" value={msg} onChange={(e) => { setMsg(e.target.value) }} /><br />
            <button onClick={cadastrar}>Cadastrar</button>
            <button onClick={ler}>Ler id: 123</button>
        </div>
    );
}

export default AddDados;