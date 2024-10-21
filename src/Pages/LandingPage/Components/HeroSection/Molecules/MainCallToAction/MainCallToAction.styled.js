import styled from "styled-components";

export const MainCallToActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 50px;
    position: relative;
    z-index: 900;

    @media (max-width: 730px){
        gap: 35px;
    }
`