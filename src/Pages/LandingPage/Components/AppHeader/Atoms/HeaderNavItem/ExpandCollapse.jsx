// icons
import { MdExpandMore } from "react-icons/md";

// styled components
import { ExpandCollapseContainer } from "./HeaderNavItem.styled";

export const ExpandCollapse = ({ text, isActive, onClick }) => {
    // Define a classe com base na propriedade isActive
    const activeClass = isActive ? 'active' : 'notActive'; 

    return (
        <ExpandCollapseContainer className={activeClass} onClick={onClick}>
            <span>{text}</span>
            <MdExpandMore className="icon" />
        </ExpandCollapseContainer>
    );
};