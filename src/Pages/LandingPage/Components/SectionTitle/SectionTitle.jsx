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
    padding: 40px 0 60px 0;
    width: 100%;

    text-align: center;
    font-size: 46px;
    letter-spacing: 7px;
    font-weight: 900;
    color: #fff;

    .highlight{
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 12px;
        text-decoration-color: #007bff;
    }
`