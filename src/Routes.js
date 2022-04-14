import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu/index";
import Contato from "./Pages/Contato";


const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Contato" element={<Contato />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;