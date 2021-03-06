import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
    padding: 50px;
    color: #fff;

    .titulo {
        font-size: 32px;
        font-weight: bold;
        margin: 1em 0em 1.5em;
    }

    .g {
        display: flex;
        flex-direction: row;
    }

    .box1 {
        display: flex;
        flex-direction: row;
        background-color: #fff;
        box-shadow: 8px 1px 0px 5px #cdcdcd;
        padding: 20px 40px;
        color: #000;
        width: 900px;
        justify-content: space-between;
    }

    .p1 {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .img img {
        width: 60px;
        height: 65px;
    }

    .nome {
        font-size: 18px;
        font-weight: 500;
    }

    









    .box2 {
        display: flex;
        flex-direction: row;
        background-color: #fff;
        box-shadow: 8px 1px 0px 5px #cdcdcd;
        padding: 20px;
        color: #000;
    }
`;

export { Container }

//import styled from "styled-components";

//const Container = styled.div`
//    display: flex;
///    flex-direction: row;
//    background-color: #fff;
//    box-shadow: 8px 1px 0px 5px #cdcdcd;
//    padding: 20px;
//    color: #000;
//`;

//export { Container }