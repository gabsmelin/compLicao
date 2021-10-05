import styled from 'styled-components';

const Container = styled.div`
    background-color: #fff;
    box-shadow: 8px 1px 0px 5px #cdcdcd;
    padding: 20px;
    width: 310px;
    margin: 30px 0px;

    .img-p img{
        width: 140px;
        height: 150px;
    }

    .nome-p {
        font-size: 24px;
        font-weight: bold;
    }

    .preco-p {
        font-size: 20px;
        margin: 10px 0px;
    }

    .btn-p button {
        background-color: transparent;
        font-weight: 800;
        border: 3px solid #A107FF;
        border-radius: 10px;
        padding: 5px 8px;
        cursor: pointer;
    }

    .btn-p button:hover {
        background-color: #A107FF;
        color: #fff;
    }
`;

export { Container }