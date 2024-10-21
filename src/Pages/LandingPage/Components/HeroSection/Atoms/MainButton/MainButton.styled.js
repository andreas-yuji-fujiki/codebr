import styled from "styled-components";

export const MainCallButton = styled.button`
    font-size: 1.4rem;
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

    @media (max-width: 660px){
        font-size: 3.1vw;
    }
`