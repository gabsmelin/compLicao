import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    margin-bottom: 50px;


    .box1 {
        display: flex;
        flex-direction: row;
        background-color: #fff;
        box-shadow: 8px 1px 0px 5px #cdcdcd;
        padding: 20px 40px;
        color: #000;
        width: 900px;
        height: 150px;
        justify-content: space-between;
        align-items: center;
    }

    .p1 {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .p1-d {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .img img {
        width: 60px;
        height: 65px;
    }

    .nome {
        font-size: 19px;
        font-weight: normal;
    }

    .nome-p {
        font-weight: 600;
    }
    
    .nome-i img {
        width: 55px;
        height: 55px;
        cursor: pointer;
    }

    .nome-i button {
        border: none;
        background-color: transparent;
    }
    
    .box-2 {
        display: flex;
        flex-direction: row;
        background-color: #fff;
        margin-left: 50px;
        box-shadow: 8px 1px 0px 5px #cdcdcd;
        padding: 20px;
        height: 150px;
        color: #000;
        align-items: center;
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