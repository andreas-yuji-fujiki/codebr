// components
import { CallToActionTitle } from "../../Atoms/Title/CallToActionTitle"
import { MainButton } from "../../Atoms/MainButton/MainButton"

// styled components
import { MainCallToActionContainer } from './MainCallToAction.styled'

export const MainCallToAction = () => {
    return(
        <MainCallToActionContainer>
            <CallToActionTitle/>
            <MainButton/>
        </MainCallToActionContainer>
    )
}