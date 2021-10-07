import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;

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
`;

export { Container }