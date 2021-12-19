import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
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
        <h1>Pedido feito com sucesso!</h1>
        <bold>Filme e sessão</bold>
        <p>{location.state.movieName}</p>
        <p>{`${location.state.sessao} ${location.state.date}`}</p>
        <bold>Ingressos</bold>
        {seatsArray.map((seat) => <p>Assento {seat}</p>)}
        <bold>Comprador</bold>
        <p>Nome: {location.state.name}</p>
        <p>CPF: {location.state.cpf}</p>

        <Link to="/" >
            <button>Voltar pra Home</button>
        </Link>
        </>
    );
}