import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import RotaFilmes from "./Components/RotaFilmes";

export default function App(){
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<RotaFilmes />}></Route>
        </Routes>
        </BrowserRouter>
        
    );
}