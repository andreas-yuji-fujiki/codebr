import { useState, useEffect } from "react";

// components
import { LogoTitle } from "./Atoms/LogoTitle/LogoTitle";
import { MobileHeaderNav } from "./Molecules/HeaderNav/MobileHeaderNav/MobileHeaderNav";
import { HeaderNav } from "./Molecules/HeaderNav/HeaderNav";
import { AccountSection } from "./Molecules/AccountSection/AccountSection";

// styles
import { AppHeaderContainer, AppHeaderBox } from "./AppHeader.styled";

export const AppHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AppHeaderBox isScrolled={isScrolled}>
            <AppHeaderContainer>
                <MobileHeaderNav />
                <LogoTitle />
                <HeaderNav />
                <AccountSection />
            </AppHeaderContainer>
        </AppHeaderBox>
    );
};
