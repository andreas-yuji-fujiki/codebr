import styled from "styled-components";

// section
export const Section = styled.section`
    border-top: 2px solid transparent;
    height: 78vh;

    background-image: url('hero-section-bg.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 1;
`

// container
export const HeroSectionContaier = styled.div`
    max-width: 1340px;
    
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`