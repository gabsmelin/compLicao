import { Container } from "./styled";

export default function Index(props) {
    
    function totall() {
        props.total();
    }


    return(
        <Container>
            <div className="titulo">Valor total:</div>
            <div className="total">R${totall}</div>
        </Container>
    )
}