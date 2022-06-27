import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddDados from "./Pages/AddDados";
import Home from "./Pages/Home";
import Escola from "./Pages/LearnContextApi/Escola";
import ListaDados from "./Pages/ListaDados";
import Teste from "./diversos/Teste/teste";


function RoutesApp() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adiconadados" element={<AddDados />} />
                    <Route path="/listadados" element={<ListaDados />} />
                    <Route path="/escola" element={<Escola />} />
                    <Route exact path="/teste" element={<Teste />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesApp;