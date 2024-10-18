// components
import { LogoTitle } from "./Atoms/LogoTitle/LogoTitle"
import { MobileHeaderNav } from "./Molecules/HeaderNav/MobileHeaderNav/MobileHeaderNav"
import { HeaderNav } from "./Molecules/HeaderNav/HeaderNav"
import { AccountSection } from "./Molecules/AccountSection/AccountSection"

// styles
import { AppHeaderContainer, AppHeaderBox } from "./AppHeader.styled"
export const AppHeader = () => {
    return(
        <AppHeaderBox>
            <AppHeaderContainer>
                <MobileHeaderNav/>
                <LogoTitle/>
                <HeaderNav/>
                <AccountSection/>
            </AppHeaderContainer>
        </AppHeaderBox>
    )
}