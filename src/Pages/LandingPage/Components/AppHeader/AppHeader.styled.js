import styled from "styled-components";

export const AppHeaderBox = styled.header`
    background-color: #0e1015;
    z-index: 1900;
    padding: 27px 10px 20px 10px;
    width: 100%;

    position: sticky;
    top: 0;
    left: 0;
`

export const AppHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1525px){
        max-width: 95vw;
    }
`