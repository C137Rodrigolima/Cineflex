import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

export default function RotaSecoes(){
    const {idFilme} = useParams();
    const [secoes, setSecoes] = useState({});
    

    useEffect(() => {
        const PromessaSecoes = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        PromessaSecoes.then(resp => {
			setSecoes(resp.data);
        });
    }, []);

    if (Object.keys(secoes).length === 0){
        return <h1>Carregando Seções...</h1>
    }

    return (
        <>
        <h1>Selecione o horário</h1>
            {secoes.days.map((secao) =>
            <div className='bloco-horario' key={secao.id}>
                <h3>{`${secao.weekday} - ${secao.date}`}</h3>
                <Link to={`/assentos/${secao.showtimes[0].id}`} key={secao.showtimes[0].id}>
                <button>{`${secao.showtimes[0].name}`}</button>
                </Link>
                <Link to={`/assentos/${secao.showtimes[1].id}`} key={secao.showtimes[1].id}>
                <button>{`${secao.showtimes[1].name}`}</button>
                </Link>
            </div>
            )}
        </>
    );
}