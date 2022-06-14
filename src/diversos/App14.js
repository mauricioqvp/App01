import React, { useState } from 'react';
/* Udemy
*  Capítulo 47 - Curso React Js do zero ao avançado na prática
*  Api useState
*/
function App(){

    const [tarefas,setTarefas] = useState([]);

    const [input,setInput] = useState('');

    function inserir(){
        setTarefas([...tarefas,input]);
        setInput('');
    }

    return(
        <div>
            <h3>Tarefa:</h3>
            <ul>
                {tarefas.map((x) => (<li key={x}>{x}</li>))}
            </ul>
            <input type="week" onChange={(e) => {setInput(e.target.value)}} value={input} />
            <button type="button" onClick={inserir}>Cadastrar</button>
        </div>
    );
}

export default App;