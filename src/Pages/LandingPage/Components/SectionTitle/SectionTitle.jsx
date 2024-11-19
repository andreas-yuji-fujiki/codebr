export function SectionTitle({content}){
    return(
        <SectionTitleWrapper>
            {content}
        </SectionTitleWrapper>
    )
}

// styled components
import styled from "styled-components"
const SectionTitleWrapper = styled.h2`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    font-size: 46px;
    letter-spacing: 7px;
    font-weight: 900;
    color: #fff;

    .highlight{
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 10px;
        text-decoration-color: #007bff;
    }
`