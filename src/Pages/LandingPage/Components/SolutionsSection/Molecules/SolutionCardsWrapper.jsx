// icons
import { LuCode2 } from "react-icons/lu";
import { BsFillPersonFill } from "react-icons/bs";

// components import
import { SolutionCard } from "../Atoms/SolutionCard"

// solution cards container component
export const SolutionCardsWrapper = () => {
    // cards list items
    const programmerItems = [
        "Acelere o desenvolvimento com templates personalizáveis",
        "Integração fácil com ferramentas de desenvolvimento populares",
        "Economize tempo em projetos repetitivos e foque na inovação",
        "Acesso a uma comunidade de desenvolvedores para troca de ideias e suporte"
    ];    
    const beginnerItems = [
        "Tutoriais interativos e didáticos",
        "Acesso a uma comunidade engajada",
        "Modifique templates prontos e crie seu próprio projeto",
        "Suporte disponível sempre que você precisar"
    ];    
    
    return (
        <SolutionCardsContainer>
            <SolutionCard
            className={"programmers-card"}
            title={<><LuCode2 /> Programadores</>}
            cardItems={ programmerItems }/>

            <SolutionCard
            className={"beginners-card"}
            title={<><BsFillPersonFill /> Iniciantes</>}
            cardItems={ beginnerItems }/>
        </SolutionCardsContainer>
    )
}

// styled
import styled from "styled-components"
const SolutionCardsContainer = styled.article`
    width: 93%;
    margin: 0 auto;
    color: #fff;

    display: flex;
    
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1520px){
      width: 96%;
    }
    @media (max-width: 768px){
        margin-top: 5.1%;
        width: 100%;
        gap: 15px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;