// components:
import { LoginButton } from "../../Atoms/AccountButtons/LoginButton"
import { SubscribeButton } from "../../Atoms/AccountButtons/SubscribeButton"

// styled components:
import { AccountSectionContainer } from "./AccountSection.styled"

export const AccountSection = () => {
    return(
        <AccountSectionContainer>
            <LoginButton/>
            <SubscribeButton/>
        </AccountSectionContainer>
    )
}