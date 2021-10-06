//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
//import { Link, useHistory } from 'react-router-dom';

import Produto from '../produto'

import { Container } from "./styled"

import Img1 from '../../assets/img/pc.jpg';
import Img2 from '../../assets/img/poltrona.jpg';
import Img3 from '../../assets/img/tecla-mouse.jpg';

export default function Index(props) {
    const [produtod, setProdutos] = useState([]);

    // Onde entraria a API
    function listar() {
        const r = 
        [
            {
                id: "1",
                imagem: {Img1},
                nome: "PC Gamer",
                preco: "R$12.000,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            }, 
            {
                id: "2",
                imagem: {Img2},
                nome: "Poltrona Gamer",
                preco: "R$1.500,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: "3",
                imagem: {Img3},
                nome: "Teclado e Mouse Gamer",
                preco: "R$150,00",
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