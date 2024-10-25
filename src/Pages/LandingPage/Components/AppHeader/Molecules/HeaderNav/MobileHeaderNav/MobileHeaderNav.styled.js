import styled from "styled-components";

export const MobileNavContainer = styled.div`
    display: none;

    color: #fff;
    padding: 5px 32px 5px 6px;
    font-size: 22px;;

    .icon{
        opacity: 0.8;
        position: relative;
        z-index: 900;
        cursor: pointer;
    }
    .icon:hover{
        opacity: 1;
    }

    @media(max-width: 1145px){
        display: inline-block;
    }
    @media(max-width: 660px){
        font-size: 20px;
        padding: 5px 24px 5px 6px;
    }
    @media(max-width: 428px){
        padding: 0 22.2px 0 12.2px;
    }
    @media(max-width: 414px){
        padding: 0 20px 0 12.2px;
    }
    @media(max-width: 380px){
        font-size: 18px;
        margin-bottom: -3.4px;
        padding: 0 19px 0 10px;
    }
    @media(max-width: 365px){
        padding: 0 20px 0 10.2px;
    }
`

// mobile menu container
export const MobileMenuBar = styled.div`
    visibility: hidden;

    width: 355px;
    height: 100vh;
    background-color: #0e1015;

    position: fixed;
    left: 0;
    top: 0;
    
    &.active{
        visibility: visible;
    }
    
    @media (max-width: 660px){
        width: 248px;
    }
    @media (max-width: 380px){
        width: 230px;
        padding-left: 0;
    }
    @media (max-width: 310px){
        width: 205px;
    }
`

// mobile buttons list
export const MobileNavButtons = styled.nav`
    width: 100%;
    height: 85vh;
    display: none;

    .icon{
        margin-bottom: -3px;
    }

    *{
        font-size: 16px;
        letter-spacing: 1.5px;
    }

    &.active{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0 0 22px;
    }

    margin-top: 24%;
    @media (max-width: 660px){
        margin-top: 30%;
    }
    @media (max-width: 428px){
        margin-top: 29%;
    }
    @media (max-width: 380px){
        margin-top: 31.2%;
    }
    @media (max-width: 310px){
        margin-top: 32.5%;
    }
`