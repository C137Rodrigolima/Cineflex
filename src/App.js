import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header";
import RotaFilmes from "./Components/RotaFilmes";
import RotaSessoes from "./Components/RotaSessoes";
import RotaAssentos from "./Components/RotaAssentos";
import RotaSucesso from "./Components/RotaSucesso";

export default function App(){
    
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<RotaFilmes />}></Route>
            <Route path="/sessoes/:idFilme" element={<RotaSessoes />}></Route>
            <Route path="/assentos/:idSessao" element={<RotaAssentos />}></Route>
            <Route path="/sucesso" element={<RotaSucesso />}></Route>
        </Routes>
        </BrowserRouter>
    );
}