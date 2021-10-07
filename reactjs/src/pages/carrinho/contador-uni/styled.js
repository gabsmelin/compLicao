import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;

    .vava {
        color: #000;
        width: 20px;
        height: 25px;
        margin: 0px 15px;
        text-align: center;
        font-weight: bolder;
        padding: 2px;
    }
    .mais {
        font-size: 24px;
    }

    button {
        background-color: transparent;
        font-weight: 800;
        border: 3px solid #A107FF;
        border-radius: 10px;
        padding: 5px;
        cursor: pointer;
        color: #000;
        width: 35px;
        height: 35px;
    }

     button:hover {
        background-color: #A107FF;
        color: #fff;
    }
`;

export { Container }