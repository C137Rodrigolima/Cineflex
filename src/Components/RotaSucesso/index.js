import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./style.css";
export default function RotaSucesso(){
    let location = useLocation()
    const {
        seatsArray,
        movieName,
        date,
        sessao,
        name,
        cpf} = location.state;

    return (
        <>
        <div className='titulo-sucesso'>
            <p>Pedido feito</p>
            <p>com sucesso!</p>
        </div>
        <div className='content-sucesso'>
            <div className='text-sucesso'>
                <div className='titulo-info'>Filme e sessão</div>
                <div className='order-info'>{location.state.movieName}</div>
                <div className='order-info'>{`${location.state.sessao} ${location.state.date}`}</div>
            </div>
            <div className='text-sucesso'>
            <div className='titulo-info'>Ingressos</div>
                {seatsArray.map((seat) => <div className='order-info'>Assento {seat<10? "0"+seat : seat}</div>)}
            </div>
            <div className='text-sucesso'>
            <div className='titulo-info'>Comprador</div>
                <div className='order-info'>Nome: {location.state.name}</div>
                <div className='order-info'>CPF: {location.state.cpf}</div>
            </div>

        </div>
        <div className='button-sucesso'>
            <Link className='link-button' to="/" >
                <button className='button-3'>Voltar pra Home</button>
            </Link>
        </div>
        </>
    );
}