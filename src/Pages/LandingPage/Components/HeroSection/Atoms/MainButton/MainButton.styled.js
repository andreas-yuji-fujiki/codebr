import styled from "styled-components";

export const MainCallButton = styled.button`
    font-size: 1.4rem;
    letter-spacing: 3.5px;
    padding: 1rem 2.5rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #007bff;
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));

    &:active{
        scale: 0.92;
    }

    &:hover{
        background: rgb(2,29,78);
        background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
        color: rgb(4, 4, 38);
    }

    @media (max-width: 804px){
        width: 70%;
    }
    @media (max-width: 660px){
        font-size: 18.5px;
    }
    @media (max-width: 630px){
        width: 100%;
    }
    @media (max-width: 440px){
        font-size: 17px;
    }
    @media (max-width: 390px){
        font-size: 15px;
    }
    @media (max-width: 335px){
        font-size: 14px;
        padding: 0.9rem 2rem;
    }
`