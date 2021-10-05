import { Link } from 'react-router-dom'
import { Container } from "./styled"

export default function Index(props) {
    return(
        <Container>
            <div className="img-p"><img src={props.info.imagem} alt=""/></div>
            <div className="nome-p"> {props.info.nome} </div>
            <div className="preco-p"> {props.info.preco} </div>
            <Link to={{ pathname: '/detproduto', state: props.info}}>
                <div className="btn-p"><button>Ver detalhes</button></div>
            </Link>
        </Container>
    )
}