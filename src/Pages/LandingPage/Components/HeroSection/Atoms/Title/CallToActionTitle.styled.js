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

    @media (max-width: 940px){
        font-size: 48px;
    }
    @media (max-width: 875px){
        font-size: 46px;
    }
    @media (max-width: 804px){
        font-size: 40px;
    }
    @media (max-width: 712px){
        font-size: 37px;
    }
    @media (max-width: 660px){
        font-size: 35px;
    }
    @media (max-width: 630px){
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
    @media (max-width: 540px){
        font-size: 36.6px;
    }
    @media (max-width: 490px){
        font-size: 33px;
    }
    @media (max-width: 456px){
        font-size: 30px;
    } 
    @media (max-width: 420px){
        font-size: 28px;
    }
    @media (max-width: 400px){
        font-size: 25px;
    }
    @media (max-width: 375px){
        font-size: 23px;
    }
    @media (max-width: 360px){
        font-size: 20px;
    }
`