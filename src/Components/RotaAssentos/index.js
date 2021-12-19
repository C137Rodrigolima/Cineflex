import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import "./style.css";

export default function RotaAssentos(){

    const {idSessao} = useParams();
    const [seatsChoosen, setSeatsChoosen] = useState([]);
    const [assentos, setAssentos] = useState({});
    const [nameClient, setNameClient] = useState('');
    const [cpfClient, setCpfClient] = useState('');
    console.log(assentos);
    console.log(seatsChoosen);
    console.log(nameClient, cpfClient);

    useEffect(() => {
        const PromessaAssentos = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        PromessaAssentos.then(respost => {
			setAssentos(respost.data);
            
		});
    }, []);

    if (Object.keys(assentos).length === 0){
        return <h1>Carregando Assentos...</h1>
    }

    function handleSeats(estado, oProprio, idAssento){

        if (estado === true) {
            assentos.seats[parseInt(oProprio)-1].isAvailable = "selected";
            setSeatsChoosen([...seatsChoosen, idAssento]);
        } else if (estado === "selected"){
            assentos.seats[parseInt(oProprio)-1].isAvailable = true;

            const newAray= seatsChoosen.filter( (id) =>
                {return id!=idAssento;}
            );
            setSeatsChoosen(newAray);
        } else {
            alert("Esse assento não está disponível");
        }
    }

    function sendRequestPost() {
        alert("testando botão");
    }

    return (
        <>
        <h1>Selecione o(s) assento(s)</h1>
        <div className='conteiner-assentos'>
        {assentos.seats.map((assento) =>
        <Seates onClick={() => handleSeats(assento.isAvailable, assento.name, assento.id)} isAvailable={assento.isAvailable} key={assento.id}>
            {assento.name}
        </Seates>)}
        </div>
        <div className='conteiner-assentos'>
        <p>Nome do comprador:</p>
        <input placeholder='Digite seu nome...' value={nameClient} onChange={(event) => setNameClient(event.target.value)} />
        <p>CPF do comprador:</p>
        <input placeholder='Digite seu CPF...' value={cpfClient} onChange={(event) => setCpfClient(event.target.value)} />
        </div>
        <button onClick={sendRequestPost}>Reservar assento(s)</button>
        </>
    );
}

const Seates = styled.div`
width: 26px;
height: 25px;

font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 13px;
text-align: center;
letter-spacing: 0.04em;

display: flex;
align-items: center;
justify-content: center;

border: 1px solid ${props => props.isAvailable === "selected"? "#1AAE9E" : props.isAvailable? "#808F9D" :  "#F7C52B"};
border-radius: 12px;

background-color: ${props => props.isAvailable === "selected"? "#8DD7CF" : props.isAvailable? "#C3CFD9":  "#FBE192"};
`;