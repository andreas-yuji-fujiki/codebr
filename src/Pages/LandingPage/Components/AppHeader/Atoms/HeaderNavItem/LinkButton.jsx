import { LinkButtonContainer } from "./HeaderNavItem.styled";

export const LinkButton = ({ text, path, isActive, onClick }) => {
    const buttonClass = isActive ? 'active' : '';

    return (
        <LinkButtonContainer 
            className={buttonClass}
            onClick={onClick}
        >
            <a href={path}>
                {text}
            </a>
        </LinkButtonContainer>
    );
};
