import styled from "styled-components";

// link button component
export const LinkButtonContainer = styled.button`
    color: #fff;
    background-color: transparent;
    padding: 17.5px 5px 17.5px 0;

    font-size: 15.8px;
    border: none;
    color: #fff;
    font-weight: 900;
    opacity: 0.67;

    &:hover{
        cursor: pointer;
        opacity: 1;
    }

    /* active */
    &.active{
        opacity: 0.4;
        text-decoration: underline;
        text-decoration-color: #007bff;
        text-underline-offset: 2.7px;
        pointer-events: none;
        .icon{
            display: none;
        }
    }
    &.active::before{
        content: '>';
        color: #007bff;
        margin-right: 4px;
    }

    @media (max-width: 380px){
        padding: 17.5px 5px 17.5px 0;
    }
`
