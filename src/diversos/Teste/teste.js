import { useEffect, useState } from "react";
// https://www.delftstack.com/pt/howto/javascript/javascript-copy-to-clipboard/#copiar-texto-para-a-%25C3%25A1rea-de-transfer%25C3%25AAncia-usando-clipboard-api-em-javascript

function Teste() {

    const [conteudo, setConteudo] = useState('');

    useEffect(() => {
    }, []);

    function copyToClipBoard(e) {
        e.preventDefault();

        //var content = document.getElementById('textArea');
        //content.select();
        //document.execCommand('copy');
        //setConteudo(content.textContent);
        //alert(content.textContent);

        if (!navigator.clipboard) {
            console.log("seu naveador não suporta API Clipboard");
            return
        }

        var content = document.getElementById('textArea').innerHTML;

        var texto = 'mauricio';

        // solução: copia um conteúdo para a Área de Transferência
        navigator.clipboard.writeText(texto)
            .then(() => {
                console.log("Text copied to clipboard...")
            })
            .catch(err => {
                console.log('Something went wrong', err);
            })
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