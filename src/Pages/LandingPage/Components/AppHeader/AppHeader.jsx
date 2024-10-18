// components
import { LogoTitle } from "./Atoms/LogoTitle/LogoTitle"
import { HeaderNav } from "./Molecules/HeaderNav/HeaderNav"
import { AccountSection } from "./Molecules/AccountSection/AccountSection"

// styles
import { AppHeaderContainer } from "./AppHeader.styled"
export const AppHeader = () => {
    return(
        <AppHeaderContainer>
            <LogoTitle/>
            <HeaderNav/>
            <AccountSection/>
        </AppHeaderContainer>
    )
}