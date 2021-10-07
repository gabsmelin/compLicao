//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styled';

import Seta from '../../assets/img/seta.png';
import Img1 from '../../assets/img/pc.jpg';

export default function Index(props) {
    const [produtos, setProdutos] = useState(props.location.state);
    const navigation = useHistory();

    function Comprar() {
        let ler = Cookies.get("carrinho");

        if(ler !== null) {
            JSON.parse();
        } else {
            JSON([])
        }

        if(ler.some(item => item.id === produtos.id)) {
            ler.push({...produtos, qtd: 1 })
        }

        Cookies.set('carrinho', JSON.stringify(ler))

        navigation.push('/carrinho');
    }

    return(
        <Container>
            <div className="cabecalho">
            <Link to="/"><div className="voltar">
                        <div className="voltar-g"><img src={Seta} alt="" /></div>
                        <div className="voltar-txt">Voltar</div>
            </div></Link>
                <div className="logo"><span style={{color: "#A107FF"}}>Careca</span> rei delas</div>
            </div>

            <div className="titulo">Detalhes do produto</div>

            <div className="box-g">
                <div className="p1">
                    <div className="img-b"><img src={Img1} alt=""/></div>
                    <div className="nome-b">{produtos.nome}</div>
                </div>
                <div className="p2">
                    <div className="preco-b">{produtos.preco}</div>
                    <div className="tit1-b">Descricão:</div>
                    <div className="i-b">{produtos.descricao}</div>
                    <div className="tit1-b">Especificações:</div>
                    <div className="i-b">{produtos.especificacoes}</div>
                    <Link to={{ pathname: '/carrinho', state: props.info}}>
                        <div className="btn-p"><button>Comprar</button></div>
                    </Link>
                </div>
            </div>
        </Container>
    )
}