import styled from "styled-components";


// expand/collapse component
export const ExpandCollapseContainer = styled.div`
    /* general */
    font-size: 15px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    font-weight: 900;
    opacity: 0.7;

    /* text */
    span::first-letter{
        text-transform: uppercase;
    }

    /* expand icon */
    .icon{
        font-size: 18px;
        margin-top: 2px;
    }

    /* hover menu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

    /* hover effects */
    &:hover{
        cursor: pointer;
    }

    /* active */
    &.active{
        opacity: 0.4;
        text-decoration: underline;
        text-decoration-color: #007bff;
        text-underline-offset: 2px;
    }
    &.active .icon{
        transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        transform: rotate(180deg);
    }
`;



// link button component
export const LinkButtonContainer = styled.button`
    color: #fff;
    background-color: transparent;

    font-size: 15px;
    border: none;
    color: #fff;
    font-weight: 900;
    opacity: 0.7;

    &:hover{
        cursor: pointer;
    }

    /* active */
    &.active{
        opacity: 0.4;
        text-decoration: underline;
        text-decoration-color: #007bff;
        text-underline-offset: 2.7px;
    }
    &.active::before{
        content: '>';
        color: #007bff;
        margin-right: 4px;
    }
`
