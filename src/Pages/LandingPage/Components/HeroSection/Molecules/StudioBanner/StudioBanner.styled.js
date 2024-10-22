import styled from "styled-components";

export const BannerContainer = styled.div`
    position: relative;
    width: 85%;
    margin: 0 auto;
    margin-top: -200px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    opacity: 0.78;

    img{
        border: 2px solid #007bff;
        margin: 0 auto;
        width: 100%;
    }

    .brutalist-container{
        margin: 0 10px -13px 0;
    }

    @media (max-width: 1250px){
        width: 93%;
    }
    @media (max-width: 1070px){
        margin-top: -170px;
        .brutalist-container{
            display: none;
        }
    }
    @media (max-width: 730px){
        margin-top: -235px;
    }
    @media (max-width: 660px){
        margin-top: -250px;
    }
    @media (max-width: 580px){
        margin-top: -285px;
    }
    @media (max-width: 508px){
        margin-top: -310px;
    }
    @media (max-width: 440px){
        margin-top: -350px;
    }
    @media (max-width: 390px){
        margin-top: -365px;
    }
`