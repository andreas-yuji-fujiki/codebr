// components import
import { DomainBannerLabel } from '../../Atoms/DomainBannerLabel/DomainBannerLabel'
import { MobileLabel } from '../../Atoms/DomainBannerLabel/MobileBannerLabel/MobileBannerLabel'

export const StudioBanner = () => {
    return(
        <BannerContainer>
            <DomainBannerLabel/>
            <MobileLabel/>
            <img src="studio-img.png" alt="Code Studio" />
        </BannerContainer>
    )
}

// styled components
import styled from "styled-components"

const BannerContainer = styled.div `
    display: flex;
    justify-content: center;

    img{
        position: relative;
        z-index: -1;
        width: 86%;
        margin: 0 auto;
        border: 2px solid #007bff;
        opacity: 0.75;
    }
    @media (max-width: 768px){
        align-items: center;
        img{
            border: none;
            opacity: 0.7;
        }
    }
`