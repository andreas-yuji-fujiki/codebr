import styled from "styled-components";

// section
export const Section = styled.section`
    border-top: 2px solid transparent;
    height: 70vh;

    background-image: url('hero-section-bg.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.9;
`

// container
export const HeroSectionContaier = styled.div`
    max-width: 1340px;
    
    margin: 50px auto 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`