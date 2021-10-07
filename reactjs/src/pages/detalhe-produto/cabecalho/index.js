import { Link } from 'react-router-dom';

import { Container } from "./styled"

import Seta from '../../../assets/img/seta.png';

export default function Index() {
    return(
        <Container>
            <Link to="/"><div className="voltar">
                <div className="voltar-g"><img src={Seta} alt="" /></div>
                <div className="voltar-txt">Voltar</div>
            </div></Link>
            <div className="logo"><span style={{color: "#A107FF"}}>Careca</span> rei delas</div>
        </Container>
    )
}