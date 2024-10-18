import styled from "styled-components";

export const AppHeaderContainer = styled.div`
    border-top: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 22px 10px 13px 30px;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1525px){
        max-width: 95vw;
    }
`