// other components import
import AboutCodeTitle from "../../Atoms/AboutCodeTitle"
import AboutCodeParagraph from "../../Atoms/AboutCodeParagraph"

// code description component
export const CodeDescription = () => {
    return (
        <CodeDescriptionWrapper>
            <ContentWrapper>
                <AboutCodeTitle />
            </ContentWrapper>
            <ContentWrapper>
                <AboutCodeParagraph />
            </ContentWrapper>
        </CodeDescriptionWrapper>
    )
}

// styled
import styled from "styled-components"
const CodeDescriptionWrapper = styled.article`
    margin: 0 auto;
    max-width: 90%;
    height: 254px;
    padding: 35px;

    display: flex;
    align-items: center;

    background: #111111;
    box-shadow: rgba(0, 0, 0, 0.9) 0px 8px 32px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

const ContentWrapper = styled.div`
    width: 50%;
`