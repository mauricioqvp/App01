import React, { useEffect, useState } from 'react';
import './assets/css/styles47.css';
/* Udemy
*  Capítulo 52 - Curso React Js do zero ao avançado na prática
*  Api useState, useEffect
*  Consumindo minha SDS2 dsDeliver Api (https://github.com/mauricioqvp/dsdeliver-sds2)
*/
//https://mauricioqvp-sds2.herokuapp.com/products
/*
"id": 6,
    "name": "Macarrão Espaguete",
    "price": 35.9,
    "description": "Macarrão fresco espaguete com molho especial e tempero da casa.",
    "imageUri"
*/

function App() {

  const url = "https://mauricioqvp-sds2.herokuapp.com/products";

  const [dados, setDados] = useState([]);
  
  useEffect(()=>{

  function loadApi() {
      
      fetch(url)
        .then((r) => (r.json()))
        .then((json) => {
          console.log(json);
          setDados(json);
        });
    }
  
    loadApi();

    },[]);

  return (
    <div className="container">
      <header>Comidas deliciosas:</header>
      {dados.map((dat) => {
        return (
          <section key={dat.id} className="post">
            <img src={dat.imageUri} alt={dat.name} className="capa" /><br/>
            <article>
              <strong className="titulo">Nome: {dat.name}</strong>
              <p className="subtitulo">Preço: {dat.price}</p>
              <p className="subtitulo">Descrição: {dat.description}</p>
              <a className="botao">Acessar</a>
            </article>
          </section>
        )
      })}
    </div>
  );
}

export default App;
