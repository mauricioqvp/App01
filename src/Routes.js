import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import ListaDados from "./Pages/ListaDados";


function RoutesApp() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listadados" element={<ListaDados />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesApp;