import Cookies from 'js-cookie'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styled';
import Cabecalho from './cabecalho'

export default function Index(props) {
    const [produtos] = useState(props.location.state);
    const navigation = useHistory();

    function Comprar() {
        let ler = Cookies.get('carrinho');

            ler = ler !== undefined
                ? JSON.parse(ler)
                : [];

        if(ler.some(item => item.id === produtos.id) === false) 
            ler.push({...produtos, qtd: 1 });
        

        Cookies.set('carrinho', JSON.stringify(ler))

        navigation.push('/carrinho');
    }

    return(
        <Container>
            <Cabecalho />

            <div className="titulo">Detalhes do produto</div>

            <div className="box-g">
                <div className="p1">
                    <div className="img-b"><img src={produtos.imagem} alt=""/></div>
                    <div className="nome-b">{produtos.nome}</div>
                </div>
                <div className="p2">
                    <div className="preco-b">{produtos.preco}</div>
                    <div className="tit1-b">Descricão:</div>
                    <div className="i-b">{produtos.descricao}</div>
                    <div className="tit1-b">Especificações:</div>
                    <div className="i-b">{produtos.especificacoes}</div>
                    
                    <div className="btn-p"><button onClick={Comprar}>Comprar</button></div>
                </div>
            </div>
        </Container>
    )
}