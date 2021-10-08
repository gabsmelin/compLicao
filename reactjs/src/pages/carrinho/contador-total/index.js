import { Container } from "./styled";

export default function Index(props) {
    
    return(
        <Container>
            <div className="titulo">Valor total:</div>
            <div className="total">R${props.total}</div>
        </Container>
    )
}