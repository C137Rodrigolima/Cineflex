import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import "./style.css";
import Footer from '../styledComponents/Footer.js';

export default function RotaSessoes(){
    const {idFilme} = useParams();
    const [sessoes, setSessoes] = useState({});

    useEffect(() => {
        const PromessaSessoes = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        PromessaSessoes.then(resp => {
			setSessoes(resp.data);
        });
    }, []);

    if (Object.keys(sessoes).length === 0){
        return <h1>Carregando Seções...</h1>
    }

    return (
        <>
        <h1>Selecione o horário</h1>
        <div className='content'>
            {sessoes.days.map((sessao) =>
            <div className='bloco-horario' key={sessao.id}>
                <h3>{`${sessao.weekday} - ${sessao.date}`}</h3>
                <div className='buttom-box'>
                    <Link className='link-button' to={`/assentos/${sessao.showtimes[0].id}`} key={sessao.showtimes[0].id}>
                    <button>{`${sessao.showtimes[0].name}`}</button>
                    </Link>
                    <Link className='link-button' to={`/assentos/${sessao.showtimes[1].id}`} key={sessao.showtimes[1].id}>
                    <button>{`${sessao.showtimes[1].name}`}</button>
                    </Link>
                </div>
            </div>
            )}
        </div>
        <Footer>
            <div className="bloco-filme">
                <img src={`${sessoes.posterURL}`} alt={`poster ${sessoes.title}`}/>
            </div>
            <div>
                <div className='footer-text'>{sessoes.title}</div>
            </div>
        </Footer>
        </>
    );
}