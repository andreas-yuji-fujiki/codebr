import { MdMenu, MdMenuOpen, MdOutlineRocketLaunch } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";

import { 
    MobileNavContainer,
    MobileMenuBar,
    MobileNavButtons
} from "./MobileHeaderNav.styled";

import { LinkButton } from "../../../Atoms/HeaderNavItem/NavLinkButton";

import { useState } from "react";

export const MobileHeaderNav = () => {
    // verifying if it is active
    const [isActive, setIsActive] = useState(false);
    const [activeClass, setActiveClass] = useState('');

    function handleClick(){
        setIsActive(!isActive);
        setActiveClass(prevClass => prevClass === '' ? 'active' : '');
    }

    // Estado para controlar o item ativo, iniciando com "comeceAgora"
    const [activeItem, setActiveItem] = useState('comeceAgora');
    const handleMobileActive = (item) => {
        setActiveItem(item); // Define o item ativo
    };
    
    return (
        <MobileNavContainer className={activeClass} onClick={handleClick}>
            {isActive ? (
                <MdMenuOpen className="icon" />
            ) : (
                <MdMenu className="icon" />
            )}
            <MobileMenuBar className={activeClass}>
                <MobileNavButtons className={activeClass}>
                    <LinkButton 
                    text={<><PiStarThin className="icon"/> Comece Agora</>}
                    isActive={activeItem === 'comeceAgora'} // Compara para definir se é ativo
                    onClick={() => handleMobileActive('comeceAgora')} // Passa o identificador para a função de clique
                />

                <LinkButton 
                    text={<><FaCode className="icon"/> Soluções</>}
                    isActive={activeItem === 'solucoes'} // Compara para definir se é ativo
                    onClick={() => handleMobileActive('solucoes')} // Passa o identificador para a função de clique
                />

                <LinkButton
                    text={<><IoMdPaperPlane className="icon"/> Recursos</>}
                    isActive={activeItem === 'recursos'} // Compara para definir se é ativo
                    onClick={() => handleMobileActive('recursos')} // Passa o identificador para a função de clique
                />

                <LinkButton 
                    text={<><MdOutlineRocketLaunch className="icon"/> Planos</>}
                    isActive={activeItem === 'planos'} // Compara para definir se é ativo
                    onClick={() => handleMobileActive('planos')} // Passa o identificador para a função de clique
                />
                </MobileNavButtons>
            </MobileMenuBar>
        </MobileNavContainer>
    );
};