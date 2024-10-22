import styled from "styled-components";

// section
export const MainSection = styled.section`
    position: relative;
    overflow: hidden;
    padding: 200px 0;

    width: 100%;
    
    background-color: #000;

    .stars1 {
        animation: space 10s alternate infinite;
    }
    .stars2 {
        animation: space 20s alternate infinite;
    }
    .stars3 {
        animation: space 30s ease-in-out infinite;
    }

    .space {
        background: #000 center / 320px 250px round;
        
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;

        background-image:
            radial-gradient(
            1px 1px at 10px 10px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1px 1px at 150px 150px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 60px 170px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 175px 180px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2px 2px at 195px 95px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2.5px 2.5px at 95px 145px, 
            white, 
            rgba(255, 255, 255, 0)
        );
    }

    @keyframes space {
        40% {
            opacity: 0.75;
        }
        50% {
            opacity: 0.25;
        }
        60% {
            opacity: 0.75;
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 720px){
        padding: 155px 0;
    }
    @media (max-width: 440px){
        padding: 140px 0;
    }
    @media (max-width: 340px){
        padding: 115px 0;
    }
`

// container
export const HeroSectionContaier = styled.div`
    max-width: 1340px;

    display: flex;
    flex-direction: column;
    
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`

// divider
export const SectionDivider = styled.div`
    width: 100vw;
    height: 600px;
    border-top: 135px solid #000;
    position: absolute;
    z-index: -1;

    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('hero-waves.svg');
`