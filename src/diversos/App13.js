import React, { useState } from 'react';
/* Udemy
*  Capítulo 47 - Curso React Js do zero ao avançado na prática
*  Api useState
*/
function App(){

    const [tarefas, setTarefas] =  useState([
    'Estudar ReactJs', 
    'Fianças pousada'
]);

    const [input, setInput] = useState('');

    function handleAdd(){
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
            <h2>Tarefas:</h2>
            <ul>
                {tarefas.map(tarefa =>(
                    <li key={tarefa} >{tarefa}</li>
                ))}
            </ul>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Adicionar</button>
        </div>
    );

}

export default App;