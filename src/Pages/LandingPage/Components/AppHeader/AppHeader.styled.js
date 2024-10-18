import styled from "styled-components";

export const AppHeaderContainer = styled.div`
    border-top: none;

    position: sticky;
    top: 0;
    left: 0;
    background-color: #0e1015;
    z-index: 900;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 32px 10px 13px 10px;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1525px){
        max-width: 95vw;
    }
`