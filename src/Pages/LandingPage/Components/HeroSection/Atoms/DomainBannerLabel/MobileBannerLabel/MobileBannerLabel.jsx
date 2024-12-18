export const MobileLabel = () => {
    return(
        <LabelContainer>
            <img src="mobile-code-span.png" alt="" />
        </LabelContainer>
    )
}

// styled
import styled from "styled-components"
const LabelContainer = styled.div`
    display: none;

    @media (max-width: 768px){
        display: flex;
        position: absolute;
        z-index: 1;
        width: 52.7%;
        color: #fff;
        opacity: 0.7;
    }
`