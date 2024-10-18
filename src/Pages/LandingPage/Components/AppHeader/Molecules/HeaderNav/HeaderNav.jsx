import { useState } from 'react';
import { ExpandCollapse } from "../../Atoms/HeaderNavItem/ExpandCollapse";
import { LinkButton } from "../../Atoms/HeaderNavItem/LinkButton";
import { HeaderNavContainer } from "./HeaderNav.styled";

export const HeaderNav = () => {
    // Estado para controlar o item ativo, iniciando com "comeceAgora"
    const [activeItem, setActiveItem] = useState('comeceAgora');

    // Função para lidar com o clique
    const handleClick = (item) => {
        setActiveItem(item); // Define o item ativo
    };

    return (
        <HeaderNavContainer>
            <LinkButton 
                text={'Comece Agora'}
                isActive={activeItem === 'comeceAgora'} // Compara para definir se é ativo
                onClick={() => handleClick('comeceAgora')} // Passa o identificador para a função de clique
            />

            <ExpandCollapse 
                text={'Soluções'}
                isActive={activeItem === 'solucoes'} // Compara para definir se é ativo
                onClick={() => handleClick('solucoes')} // Passa o identificador para a função de clique
            />

            <ExpandCollapse 
                text={'Recursos'}
                isActive={activeItem === 'recursos'} // Compara para definir se é ativo
                onClick={() => handleClick('recursos')} // Passa o identificador para a função de clique
            />

            <LinkButton 
                text={'Planos'}
                isActive={activeItem === 'planos'} // Compara para definir se é ativo
                onClick={() => handleClick('planos')} // Passa o identificador para a função de clique
            />
        </HeaderNavContainer>
    );
};
