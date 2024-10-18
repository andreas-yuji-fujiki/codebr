import styled from "styled-components";

export const MobileNavContainer = styled.div`
    display: none;

    color: #fff;
    padding: 5px 26px 5px 0;
    font-size: 22px;

    @media(max-width: 1145px){
        display: inline-block;
    }

    @media(max-width: 660px){
        font-size: 20px;
        padding: 5px 22px 5px 0;
    }
    @media(max-width: 380px){
        font-size: 18px;
        margin-bottom: -3.4px;
        padding: 0 15px 0 0;
    }
`