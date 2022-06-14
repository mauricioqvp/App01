import React, { useEffect, useState } from 'react';
import './assets/css/styles47.css';
/* Udemy
*  Capítulo 52 - Curso React Js do zero ao avançado na prática
*  Api useState, useEffect
*  Consumindo uma Api
*/
////https://sujeitoprogramador.com/rn-api/?api=posts



function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(()=> {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((r)=> r.json())
      .then((json)=> {
        console.log(json);
        setNutri(json);
      })

    }

    loadApi();
  }, []);
  
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
