import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import "./style.css";
import Footer from '../styledComponents/Footer.js';
import Seates from '../styledComponents/Seates.js';

export default function RotaAssentos(){

    const {idSessao} = useParams();
    const [seatsChoosen, setSeatsChoosen] = useState([]);
    const [seatsNumber, setSeatsNumber] = useState([]);
    const [assentos, setAssentos] = useState({});
    const [nameClient, setNameClient] = useState('');
    const [cpfClient, setCpfClient] = useState('');

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
            setSeatsNumber([...seatsNumber, parseInt(oProprio)]);
        } else if (estado === "selected"){
            assentos.seats[parseInt(oProprio)-1].isAvailable = true;
            const newArrayID= seatsChoosen.filter( (id) =>
                {return id!==idAssento;}
            );
            setSeatsChoosen(newArrayID);
            const newArrayNumber= seatsNumber.filter( (num) =>
                {return num!==(parseInt(oProprio));}
            );
            setSeatsNumber(newArrayNumber);
        } else {
            alert("Esse assento não está disponível");
        }
    }

    const objectMovieOrder = {
        seatsArray: seatsNumber,
        movieName: assentos.movie.title,
        date: assentos.day.date,
        sessao: assentos.name,
        name: nameClient,
        cpf: cpfClient
    }
    
    function sendRequestPost() {
        const objectSeatsOrder = {
            ids: seatsChoosen,
            name: nameClient,
            cpf: cpfClient
        }
        const promessaEnvio = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", objectSeatsOrder);
        promessaEnvio.catch((error)=> console.log(error));
    }

    return (
        <>
        <h1>Selecione o(s) assento(s)</h1>
        <div className='content-assentos'>
            <div className='conteiner-assentos'>
                {assentos.seats.map((assento) =>
                <Seates onClick={() => handleSeats(assento.isAvailable, assento.name, assento.id)} isAvailable={assento.isAvailable} key={assento.id}>
                    {assento.name.length<2? `0${assento.name}`: assento.name}
                </Seates>)}
            </div>
            <div className='conteiner-amostra'>
                <div className='exemplo'>
                    <div className='exemplo-1'></div><div>selecionado</div>
                </div>
                <div className='exemplo'>
                <div className='exemplo-2'></div><div>disponível</div>
                </div>
                <div className='exemplo'>
                <div className='exemplo-3'></div><div>indisponível</div>
                </div>
            </div>
            <div className='conteiner-inputs'>
                <h5>Nome do comprador:</h5>
                <input placeholder='Digite seu nome...' value={nameClient} onChange={(event) => setNameClient(event.target.value)} />
                <h5>CPF do comprador:</h5>
                <input placeholder='Digite seu CPF...' value={cpfClient} onChange={(event) => setCpfClient(event.target.value)} />
            </div>
            <Link className='link-button' to="/sucesso" state={objectMovieOrder}>
                <button className='button-2' onClick={sendRequestPost}>Reservar assento(s)</button>
            </Link>
        </div>
        <Footer>
            <div className="bloco-filme">
                <img src={`${assentos.movie.posterURL}`} alt={`poster ${assentos.movie.title}`}/>
            </div>
            <div>
                <div className='footer-text'>{assentos.movie.title}</div>
                <div className='footer-text'>{`${assentos.day.weekday} - ${assentos.name}`}</div>
            </div>
        </Footer>
        </>
    );
}