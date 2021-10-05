//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
//import { Link, useHistory } from 'react-router-dom';

import Produto from '../produto'

import { Container } from "./styled"

export default function Index(props) {
    const [produtod, setProdutos] = useState([]);

    // Onde entraria a API
    function listar() {
        const r = 
        [
            {
                id: "1",
                imagem: "http://localhost:3000/static/media/pc.42d5cea6.jpg",
                nome: "PC Gamer",
                preco: "12.000,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            }, 
            {
                id: "2",
                imagem: "http://localhost:3000/static/media/poltrona.4eebfafc.jpg",
                nome: "Poltrona Gamer",
                preco: "1.500,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: "3",
                imagem: "http://localhost:3000/static/media/tecla-mouse.6c541793.jpg",
                nome: "Teclado e Mouse Gamer",
                preco: "150,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            }
        ]
        setProdutos(r);
    }


    return(
        <Container>
            <div className="titulo">Sejam bem-vindos!</div>
            <div className="btn"><button onClick={listar}>Listar</button></div>

            
            <div className="box-p">
                {produtod.map(item => 
                    <Produto info={item}/>
                )}
            </div>
        </Container>
    )
}