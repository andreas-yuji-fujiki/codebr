// icons:
import { MdMenu, MdMenuOpen } from "react-icons/md";

// styled components:
import { MobileNavContainer } from "./MobileHeaderNav.styled";
import { useState } from "react";

export const MobileHeaderNav = () => {
    const [isActive, setIsActive] = useState(false);

    function handleClick(){
        setIsActive(!isActive);
    }

    return (
        <MobileNavContainer onClick={handleClick}>
            {isActive ? (
                <MdMenuOpen className="icon active" />
            ) : (
                <MdMenu className="icon" />
            )}
        </MobileNavContainer>
    );
};
