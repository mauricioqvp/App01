import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddDados from "./Pages/AddDados";
import Home from "./Pages/Home";
import ListaDados from "./Pages/ListaDados";


function RoutesApp() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adiconadados" element={<AddDados />} />
                    <Route path="/listadados" element={<ListaDados />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesApp;