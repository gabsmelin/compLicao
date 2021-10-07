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
                imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/k/o/komor-intel-gtx-001_5.jpg",
                nome: "PC Gamer",
                preco: "R$12.000,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            }, 
            {
                id: "2",
                imagem: "https://static.netshoes.com.br/produtos/poltrona-gamer-mancer-fenrir-pretoazul-mcr-fnr-bu01/18/0Y9-0084-118/0Y9-0084-118_zoom1.jpg?ts=1618271796&ims=544x",
                nome: "Poltrona Gamer",
                preco: "R$1.500,00",
                descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
                especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
                id: "3",
                imagem: "https://images-americanas.b2w.io/produtos/01/00/img/3327068/5/3327068592_1SZ.jpg",
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