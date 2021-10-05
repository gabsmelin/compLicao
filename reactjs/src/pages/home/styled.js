import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    height: 100vh;
    padding: 50px;
    align-items: center;

    .titulo {
        font-size: 40px;
        font-weight: bold;
    }

    .btn {
        margin-top: 20px;
    }

    .btn button {
        cursor: pointer;
        background-color: transparent;
        border: 3px solid #fff;
        color: #fff;
    }

    button:hover {
        background-color: #fff;
        color: #000;
        font-weight: bold;
    }

    .box-p {
        text-align: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 50px 0px;
        width: 1000px;
        color: #000;
    }
`;

export { Container }