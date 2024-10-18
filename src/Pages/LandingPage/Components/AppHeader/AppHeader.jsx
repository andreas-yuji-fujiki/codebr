// components
import { LogoTitle } from "./Atoms/LogoTitle/LogoTitle"
import { HeaderNav } from "./Molecules/HeaderNav/HeaderNav"

// styles
import { AppHeaderContainer } from "./AppHeader.styled"
export const AppHeader = () => {
    return(
        <AppHeaderContainer>
            <LogoTitle/>
            <HeaderNav/>
        </AppHeaderContainer>
    )
}