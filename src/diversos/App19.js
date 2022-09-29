import React, { useCallback, useEffect, useMemo, useState } from 'react';

// esta aplicação exige a retirada do "RestrictMode" no index.js da aplicação 
// para que o localStorage não seja limpo a cada re-inicio da aplicação
// não compreendi completamente

function App19(){
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
    
    }, [tarefas,novaTarefa]);
    
    // lê
    useEffect(() => {
        const listaStorage = localStorage.getItem('Tarefas');

        if(listaStorage){
            setTarefas(JSON.parse(listaStorage));
        }
    }, []);

    // salvar lista
    useEffect(()=>{
        localStorage.setItem('Tarefas', JSON.stringify(tarefas));
    },[tarefas]);

    const qtdTarefas = useMemo(() => tarefas.length, [tarefas]);

    return (
        <div>
            <h3>Você possui {qtdTarefas} itens na lista!</h3>
            <ul>
                {tarefas.map(t=>(
                    <li key={t.key}>
                        {t}
                    </li>
                ))}
            </ul>
            <input value={novaTarefa} type="text" onChange={(e)=>setNovaTarefa(e.target.value)} />
            <button onClick={handleAdd}>Cadastrar</button>
        </div>
    );
}

export default App19;