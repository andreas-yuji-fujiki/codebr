// components
import { LogoTitle } from "./Atoms/LogoTitle/LogoTitle"

// styles
import { AppHeaderContainer } from "./AppHeader.styled"
export const AppHeader = () => {
    return(
        <AppHeaderContainer>
            <LogoTitle/>
        </AppHeaderContainer>
    )
}