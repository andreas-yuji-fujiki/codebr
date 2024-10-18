import styled from "styled-components";


// login button component
export const LoginButtonContainer = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #fff;

    opacity: 0.7;
    padding: 10px 14px;
    border-radius: 20px;
    font-weight: 900;
    font-size: 15px;

    &:hover{
        opacity: 1;
    }

    @media(max-width: 660px){
        margin-top: -3px;
        font-size: 15px;
        border: none;
        background-color: #fff;
        color: #000;

        font-weight: 900;
        letter-spacing: 1.2px;
        opacity: 0.9;

        padding: 8px 20px;
        border-radius: 20px;

        &:hover{
            transition: 0.2s linear;
            background-color: #007bff;
            color: #fff;
        }
    }

    @media(max-width: 380px){
        font-size: 13px;
        padding: 7px 15px;
    }
`

// subscribe button component
export const SubscribeButtonContainer = styled.button`
    cursor: pointer;
    font-size: 15px;
    border: none;
    background-color: #fff;
    color: #000;

    font-weight: 900;
    letter-spacing: 1.2px;
    opacity: 0.9;

    padding: 10px 22px;
    border-radius: 20px;

    &:hover{
        transition: 0.2s linear;
        background-color: #007bff;
        color: #fff;
    }

    @media(max-width: 660px){
        display: none;
    }
`