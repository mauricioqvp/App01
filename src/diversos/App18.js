import React, { useState, useEffect } from 'react';

function App18() {
    const [tarefas, setTarefas] = useState([

    ]);
    const [novaTarefa, setNovaTarefa] = useState('');

    // lê
    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, []);

    // grava
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    function handleAdd() {
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
    }

    return (
        <div>
            <ul>
                {tarefas.map(
                    item => (
                        <li key={item}>
                            {item}
                        </li>))
                }
            </ul>
            <br />
            <input type="text" value={novaTarefa} onChange={(e => setNovaTarefa(e.target.value))}></input>
            <button type="button" onClick={handleAdd}>Cadastrar</button>
        </div>
    );
}

export default App18;