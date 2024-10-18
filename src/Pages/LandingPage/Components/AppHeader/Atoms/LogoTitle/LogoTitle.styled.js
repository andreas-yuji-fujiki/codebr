import styled from "styled-components";

export const LogoTitleContainer = styled.h1`
    display: flex;

    @media (max-width: 1145px){
        flex: 1;
    }

    @media(max-width: 660px){
        width: 130px;
    }
`;

export const LogoImage = styled.img`
    width: 155px;

    @media(max-width: 660px){
        width: 135px;
    }
    @media(max-width: 380px){
        width: 115px;
    }
`