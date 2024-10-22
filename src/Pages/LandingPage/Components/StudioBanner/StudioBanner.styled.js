import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    opacity: 0.75;

    img{
        border: 2px solid #007bff;
        margin: 0 auto;
        width: 85%;
    }

    @media (max-width: 1700px){
        img{
            width: 95%;
        }
    }
    @media (max-width: 1024px){
        img{
            width: 97%;
        }
    }
    @media (max-width: 768px){
        img{
            border: none;
        }
    }
`