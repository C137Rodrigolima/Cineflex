import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import RotaFilmes from "./Components/RotaFilmes";
import RotaSecoes from "./Components/RotaSecoes";
import RotaAssentos from "./Components/RotaAssentos";

export default function App(){

    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<RotaFilmes />}></Route>
            <Route path="/sessoes/:idFilme" element={<RotaSecoes />}></Route>
            <Route path="/assentos/:idSessao" element={<RotaAssentos />}></Route>
        </Routes>
        </BrowserRouter>
    );
}