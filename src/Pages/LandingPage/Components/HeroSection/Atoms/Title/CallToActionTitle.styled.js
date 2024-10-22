import styled from "styled-components";

export const CallToActionTitleContainer = styled.h2`
    color: #fff;
    font-size: 55px;
    letter-spacing: 4px;
    position: relative;

    .mobile{
        display: none;
    }

    .desktop{
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: #007bff;
    }

    @media (max-width: 875px){
        font-size: 46px;
    }
    @media (max-width: 730px){
        font-size: 40px;
    }
    @media (max-width: 660px){
        font-size: 35px;
    }
    @media (max-width: 580px){
        font-size: 40px;
        text-align: left;

        .desktop{
            display: none;
        }
        .mobile{
            display: inline-block;
        }
        .mobile-decoration{
            text-decoration: underline;
            text-underline-offset: 5px;
            text-decoration-color: #007bff;
        }
    }
    @media (max-width: 508px){
        font-size: 35px;
    }
    @media (max-width: 440px){
        font-size: 30px;
    }
    @media (max-width: 390px){
        font-size: 25px;
    } 
    @media (max-width: 335px){
        font-size: 20px;
    }
`