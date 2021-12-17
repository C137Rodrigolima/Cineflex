import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
        return <h1>Carregando filmes...</h1>
    }

    return (
        <>
        <h1>Selecione o filme</h1>
        <div className='conteiner-filmes'>
            {filmes.map((filme) => 
                <Link to={`/sessoes/${filme.id}`} key={filme.id}>
                    <div className="bloco-filme">
                        <img src={`${filme.posterURL}`} alt={`poster ${filme.title}`}/>
                    </div>
                </Link>
            )}
        </div>
		</>
    );
}