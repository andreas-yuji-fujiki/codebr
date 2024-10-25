import { useState, useEffect } from "react";
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

export const MobileHeaderNav = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeClass, setActiveClass] = useState('');
    const [activeItem, setActiveItem] = useState('comeceAgora');

    useEffect(() => {
        // Controla o overflow do body com base no estado `isActive`
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    }, [isActive]);

    function handleClick() {
        setIsActive(!isActive);
        setActiveClass(prevClass => (prevClass === '' ? 'active' : ''));
    }

    const handleMobileActive = (item) => {
        setActiveItem(item);
        setIsActive(false); // Fecha o menu ao clicar em um item
        setActiveClass(''); // Remove a classe ativa
    };

    const handleCloseOnClickOutside = (e) => {
        // Verifica se o clique foi fora do `MobileMenuBar`
        if (isActive && !e.target.closest('.menu-bar')) {
            setIsActive(false);
            setActiveClass('');
        }
    };

    useEffect(() => {
        // Adiciona o evento de clique global ao montar o componente
        document.addEventListener("mousedown", handleCloseOnClickOutside);
        return () => {
            // Remove o evento ao desmontar o componente
            document.removeEventListener("mousedown", handleCloseOnClickOutside);
        };
    }, [isActive]);

    return (
        <MobileNavContainer className={activeClass} onClick={handleClick}>
            {isActive ? (
                <MdMenuOpen className="icon" />
            ) : (
                <MdMenu className="icon" />
            )}
            <MobileMenuBar className={`menu-bar ${activeClass}`}>
                <MobileNavButtons className={activeClass}>
                    <LinkButton 
                        text={<><PiStarThin className="icon"/> Comece Agora</>}
                        isActive={activeItem === 'comeceAgora'}
                        onClick={() => handleMobileActive('comeceAgora')}
                    />
                    <LinkButton 
                        text={<><FaCode className="icon"/> Soluções</>}
                        isActive={activeItem === 'solucoes'}
                        onClick={() => handleMobileActive('solucoes')}
                    />
                    <LinkButton
                        text={<><IoMdPaperPlane className="icon"/> Recursos</>}
                        isActive={activeItem === 'recursos'}
                        onClick={() => handleMobileActive('recursos')}
                    />
                    <LinkButton 
                        text={<><MdOutlineRocketLaunch className="icon"/> Planos</>}
                        isActive={activeItem === 'planos'}
                        onClick={() => handleMobileActive('planos')}
                    />
                </MobileNavButtons>
            </MobileMenuBar>
        </MobileNavContainer>
    );
};
