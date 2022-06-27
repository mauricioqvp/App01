import { useEffect, useState } from "react";

function Teste() {
    
    const [conteudo, setConteudo] = useState('');

    useEffect(() => {
    }, []);

    function copyToClipBoard(e) {
        e.preventDefault();

        var content = document.getElementById('textArea');
        content.select();
        document.execCommand('copy');
        setConteudo(content.textContent);
        alert(content.textContent);
    }

    return (
        <div>
            <form onSubmit={copyToClipBoard}>
                <h3>Cópia para a Área de Transferencia</h3>
                <textarea id="textArea">
                    We are learning to copy text to clipboard in JavaScript.
                </textarea>
                <textarea id="vazio"
                    value={conteudo}
                    >
                </textarea>
                <button type="submit">Copy</button>
            </form>
        </div>
    );
}

export default Teste;