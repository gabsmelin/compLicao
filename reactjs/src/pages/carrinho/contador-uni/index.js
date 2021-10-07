import { Container } from "./styled";

export default function Index(props) {
    function incre() {
        props.incrementar();
    }

    function decre() {
        props.decrementar();
    }

    return(
        <Container>
            <div className="mais"><button onClick={decre}>-</button></div>
                <div className="vava">{props.qtd}</div>
            <div className="mais"><button onClick={incre}>+</button></div>
        </Container>
    )
}