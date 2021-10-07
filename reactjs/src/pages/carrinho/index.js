import Cabecalho from '../detalhe-produto/cabecalho'
import { Container } from './styled';
import { useState, useEffect } from 'react';
import ProdutoC from './carrinho-item'
import Cookies from 'js-cookie'

export default function Index(props) {
    const [produtos, setProdutos] = useState([]);

    useEffect(carregarCarrinho, []);

    function carregarCarrinho() {
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined 
                      ? JSON.parse(carrinho) 
                      : [];

        setProdutos(carrinho);
    }

    function alterarProduto(id, qtd) {
        let produtoAlterado = produtos.filter(item => item.id === id)[0];
        produtoAlterado.qtd = qtd;
        Cookies.set('carrinho', JSON.stringify(produtos));
    }
    
    function removerProduto(id, qtd) {
        let carrinho = produtos.filter(item => item.id !== id);
        Cookies.set('carrinho', JSON.stringify(carrinho));
        setProdutos([...carrinho]);
    }



    return(
        <Container>
            <Cabecalho />

            <div className="titulo">Carrinho:</div>

            <div className="box-produtos">
                {produtos.map(item => 
                    <ProdutoC key={item.id} 
                        info={item}
                        onUpdate={alterarProduto}
                        onRemove={removerProduto}
                    />
                )}
            </div>

        </Container>
    )
}