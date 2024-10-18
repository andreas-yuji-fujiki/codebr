import { 
    LogoTitleContainer,
    LogoImage
} from "./LogoTitle.styled"

export const LogoTitle = () => {
    return(
        <>
            <LogoTitleContainer>
                <a href="#">
                    <LogoImage 
                        src="app-logo.svg" 
                        alt="Code - A plataforma que eleva a produtividade do Desenvolvedor."/>
                </a>
            </LogoTitleContainer>
        </>
    )
}