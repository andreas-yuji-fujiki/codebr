// components
import { BannerContainer } from "./StudioBanner.styled"
import UrlInput from "./Atoms/UrlInput/UrlInput"
import { MobileLabel } from "./Atoms/MobileLabel/MobileLabel"

export const StudioBannerComponent = () => {
    return(
        <BannerContainer>
            <UrlInput/>
            <MobileLabel/>
            <img src="studio-img.png" alt="Code Studio" />
        </BannerContainer>
    )
}