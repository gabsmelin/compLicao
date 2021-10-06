import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
    height: 100%;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 30px 50px;


    .cabecalho {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .voltar {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a, a:link {
        text-decoration: none;
        color: inherit;
    }

    a:link:hover {
        text-decoration: underline;
    }

    .voltar-g img {
        color: #fff;
        width: 30px;
        height: 30px;
        margin-top: 8px;
    }

    .voltar-txt {
        font-weight: 500;
        font-size: 18px;
        margin-left: 8px;
    }

    .logo {
        font-size: 22px;
        width: 100px;
        text-align: center;
        font-weight: bolder;
        line-height: 22px;
    }

    .titulo {
        font-size: 32px;
        font-weight: bold;
        margin: 30px 0px;
    }

    .box-g {
        display: flex;
        flex-direction: row;
        color: #000;
        background-color: #fff;
        box-shadow: 15px -3px 0px 10px #cdcdcd;
        padding: 35px 100px;
        width: 1000px;
        justify-content: space-between;
    }

    .p1 {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .img-b img{
        width: 20em;
        height: 22em;
    }

    .nome-b {
        font-weight: bold;
        font-size: 30px;
        margin-top: 20px;
    }

    .nome-b {
        font-weight: bold;
        font-size: 30px;
        margin-top: 20px;
    }

    .preco-b {
        font-weight: bold;
        font-size: 30px;
        margin-top: 20px;
    }

    .tit1-b {
        margin: 40px 0px 10px;
        font-size: 20px;
        font-weight: 600;
    }

    .i-b {
        width: 300px;
    }

    .btn-p button {
        background-color: transparent;
        font-weight: 800;
        border: 3px solid #A107FF;
        border-radius: 10px;
        padding: 8px 40px;
        cursor: pointer;
        margin-top: 3em;
    }

    .btn-p button:hover {
        background-color: #A107FF;
        color: #fff;
    }
`;

export { Container }