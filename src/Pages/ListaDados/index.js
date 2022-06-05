import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';

function ListaDados (){

const [msg,setMsg] = useState({});

useEffect(() => {

    async function leitura(){
        await firebase.firestore().collection('fichas')
        .doc('xScqC0EvquRqoR0L9Du0')
        .get()
        .then((snapshot)=>{
            var item = {
                freq: snapshot.data().frequencia,
                mensg: snapshot.data().mensagems
            }
            setMsg(item);
        })
        .catch((err)=>{
            console.log('Erro na obtenção dos dados: ', err);
        })
    }

    leitura();
    console.log(msg);

},[]);


    return(
        <div>
            <h2>Listagem dos dados do BD:</h2>
            <strong>Frequencia: </strong>
            <i>{msg.freq}</i><br/>
            <strong>Frase: </strong>
            <i>{msg.mensg}</i><br/><br/>
        </div>
    );
}

export default ListaDados;