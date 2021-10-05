//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//import Cookies from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Seta from '../../assets/img/setal.png';

export default function Index(props) {
    const [produtos, setProdutos] = useState(props.location.state);
    const navigation = useHistory();
    

    return(
        <div classname="container">
            <div className="cabecalho">
                <div className="voltar"><Link to="/"><img src={Seta} alt="" /> Voltar</Link></div>
                <div className="logo">Careca rei delas</div>
            </div>

            <div className="titulo">Detalhes do produto</div>

            <div className="box-g">
                <div className="p1">
                    <div className="img-b">{produtos.imagem}</div>
                </div>
                <div className="p2">
                    <div className="nome-b">{produtos.nome}</div>
                    <div className="preco-b">{produtos.preco}</div>
                    <div className="tit1-b">Descricão:</div>
                    <div className="preco-b">{produtos.descricao}</div>
                    <div className="tit1-b">Especificações:</div>
                    <div className="preco-b">{produtos.especificacoes}</div>
                </div>
            </div>
        </div>
    )
}