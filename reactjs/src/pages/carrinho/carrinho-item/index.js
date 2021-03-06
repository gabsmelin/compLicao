import ContadorU from '../contador-uni'
import ContadorT from '../contador-total'
import { Container } from './styled';
import { useEffect, useState } from 'react';

import Remover from '../../../assets/img/lixo.png'

export default function Index(props) {
    const [produtos] = useState(props.info);
    const [precov] = useState(props.info.precoint);
    const [qtd, setQtd ] = useState(1);
    const [total, setTotal] = useState(precov);

    function incrementar() {
        let r = setQtd(qtd+1)
        return r;
    }

    function decrementar() {
        if (qtd === 1) 
        return;
        setQtd(qtd-1)
    }


    useEffect(() => {
        setTotal(qtd * precov);
    }, [qtd])

    function remover() {
        props.onRemove(produtos.id);
    }

    return(
        <Container>
            <div className="box1">
                <div className="p1">
                    <div className="img"><img src={produtos.imagem} alt="" /></div>
                    <ContadorU incrementar={incrementar} decrementar={decrementar} qtd={qtd}/>
                </div>

                <div className="p1">
                    <div className="nome">Produto</div>
                    <div className="nome-p">{produtos.nome}</div>
                </div>

                <div className="p1">
                    <div className="nome">Preço unitário</div>
                    <div className="nome-p">{produtos.preco}</div>
                </div>

                <div className="p1">
                    <div className="nome">Quantidade</div>
                    <div className="nome-p">{qtd}</div>
                </div>

                <div className="p1-d">
                    <div className="nome-i"><button onClick={remover}><img src={Remover} alt="" /></button></div>
                </div>
            </div>

            <div className="box-2">
                <ContadorT  total={total} />
            </div>
        </Container>
    )
}