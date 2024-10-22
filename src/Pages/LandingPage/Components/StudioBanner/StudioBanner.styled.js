import styled from "styled-components";

export const BannerContainer = styled.div`
    position: relative;
    z-index: 10;
    
    width: 100%;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    opacity: 0.78;

    img{
        border: 2px solid #007bff;
        margin: 0 auto;
        width: 85%;
    }
`