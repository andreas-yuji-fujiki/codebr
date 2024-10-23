import { BannerContainer } from "./StudioBanner.styled"
import UrlInput from "../../../StudioBanner/Atoms/UrlInput/UrlInput"

export const StudioBannerComponent = () => {
    return(
        <BannerContainer>
            <UrlInput/>
            <img src="studio-img.png" alt="Code Studio" />
        </BannerContainer>
    )
}