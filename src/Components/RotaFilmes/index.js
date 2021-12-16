import { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
export default function RotaFilmes(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const PromessaFilmes = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        PromessaFilmes.then(resposta => {
			setFilmes(resposta.data);
            console.log(resposta.data);
		});
    }, []);

    if (filmes.length === 0){
        return <div>Carregando imagem...</div>
    }

    return (
        <>
        <h1>Filmes</h1>
        <div className='conteiner-filmes'>
            {filmes.map((filme) => 
            <div className="bloco-filme">
                <img src={`${filme.posterURL}`}/>
            </div>)}
        </div>
		</>
    );
}