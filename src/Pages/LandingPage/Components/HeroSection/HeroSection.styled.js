import styled from "styled-components";

// section
export const Section = styled.section`
    height: 90vh;
    overflow: hidden;
    background-color: #000;

    /* .space {
        background: #000 center / 320px 250px round;
        
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }

    .stars1 {
        animation: space 10s alternate infinite;
        background-image:
            radial-gradient(
            1px 1px at 25px 5px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1px 1px at 50px 25px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1px 1px at 125px 20px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 50px 75px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2px 2px at 15px 125px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2.5px 2.5px at 110px 80px, 
            white, 
            rgba(255, 255, 255, 0)
        );
    }
    .stars2 {
        animation: space 20s alternate infinite;
        background-image:
            radial-gradient(
            1px 1px at 75px 125px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1px 1px at 100px 75px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 199px 100px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2px 2px at 20px 50px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2.5px 2.5px at 100px 5px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2.5px 2.5px at 5px 5px, 
            white, 
            rgba(255, 255, 255, 0)
        );
    }
    .stars3 {
        animation: space 30s ease-in-out infinite;
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
    } */

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