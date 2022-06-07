import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h2>Página Home</h2>
            <Link to="listadados">Lista dados</Link><br/>
            <Link to="adiconadados">Adiciona dados</Link>
        </>
    );
}

export default Home;