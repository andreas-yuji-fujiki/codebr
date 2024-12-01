export function SectionTitle({ content }) {
    return (
        <div>
            <Divider className="divider top" src="./section-title-waves.svg"/>

            <SectionTitleWrapper>
                <div className="space stars1"></div>
                <div className="space stars2"></div>
                <div className="space stars3"></div>
                <h2>{content}</h2>
            </SectionTitleWrapper>

            <Divider className="divider bottom" src="./section-title-waves.svg"/>
        </div>
    );
}

// styled components
import styled from "styled-components";

const Divider = styled.img`
    width: 100%;
    &.top{
        margin-bottom: -10px;
        transform: rotate(180deg) scaleX(-1);
    }
`
const SectionTitleWrapper = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #000;
    z-index: -1;

    width: 100%;

    h2{
        padding: 160px 0;
        position: relative;
        z-index: 2;
        text-align: center;
        font-size: 46px;
        letter-spacing: 7px;
        font-weight: 900;
        color: #fff;
        z-index: 2;
    }

    h2 .highlight {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 12px;
        text-decoration-color: #007bff;
    }

    .stars1 {
        animation: space 5s alternate infinite;
    }
    .stars2 {
        animation: space 10s alternate infinite;
    }
    .stars3 {
        animation: space 15s ease-in-out infinite;
    }

    .space {
        background: #000 center / 320px 250px round;
        
        z-index: 1;

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
`;
