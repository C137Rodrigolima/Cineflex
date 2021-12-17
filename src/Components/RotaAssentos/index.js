import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function RotaAssentos(){

    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState({});
    console.log(assentos);
    

    useEffect(() => {
        const PromessaAssentos = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        PromessaAssentos.then(respost => {
			setAssentos(respost.data);
            
            
		});
    }, []);

    if (Object.keys(assentos).length === 0){
        return <h1>Carregando Assentos...</h1>
    }

    return (
        <>
        <h1>Selecione o assento</h1>
        <p>Assentos aqui...</p>
        </>
    );
}