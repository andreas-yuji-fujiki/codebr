export const MobileLabel = () => {
    return(
        <LabelContainer>
            <img src="/mobile-code-span.png" alt="" />
        </LabelContainer>
    )
}

// styled
import styled from "styled-components"
const LabelContainer = styled.div`
    display: none;
    position: absolute;
    z-index: 2;
    width: 52.7%;
    padding: 15px;
    color: #fff;

    @media (max-width: 768px){
        display: flex;
    }
`