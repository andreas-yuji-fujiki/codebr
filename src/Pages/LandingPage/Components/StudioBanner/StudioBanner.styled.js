import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    opacity: 0.75;

    img{
        position: relative;
        z-index: -1;
        border: 2px solid #007bff;
        margin: 0 auto;
        width: 100%;
    }
    @media (max-width: 768px){
        width: 93%;
        img{
            opacity: 0.8;
            border: none;
        }
    }
    @media (max-width: 335px){
        width: 90%;
    }
`