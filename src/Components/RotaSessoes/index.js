import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import "./style.css";

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
                <p>{sessoes.title}</p>
            </div>
        </Footer>
        </>
    );
}

const Footer = styled.div `
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;

    color: #293845;

    display: flex;
    align-items: center;

    background: #DFE6ED;
    border-top: 1px solid #9EADBA;

    .bloco-filme{
        width: 64px;
        height: 89px;
        margin: 0px 10px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }
    img{
        width: 48px;
        height: 72px;
    }
`;