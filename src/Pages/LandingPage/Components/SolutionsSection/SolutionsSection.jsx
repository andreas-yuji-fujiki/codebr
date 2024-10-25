// icons
import { LuCode2 } from "react-icons/lu";
import { BsFillPersonFill } from "react-icons/bs";

// components
import { SolutionsCard } from "./Atoms/SolutionsCard"

export const SolutionsSection = () => {
    const programmerItems = [
        "Acelere o desenvolvimento com templates personalizáveis!",
        "Integração fácil com ferramentas de desenvolvimento populares!",
        "Economize tempo em projetos repetitivos e foque na inovação!",
        "Acesso a uma comunidade de desenvolvedores para troca de ideias e suporte!"
    ];    
    const beginnerItems = [
        "Tutoriais interativos e didáticos!",
        "Acesso a uma comunidade engajada!",
        "Modifique templates prontos e crie seu próprio projeto!",
        "Suporte disponível sempre que você precisar!"
    ];    
  
    return (
      <SolutionsContainer>
        <SolutionsCard
          title={<><LuCode2 /> Programadores</>}
          cardItems={ programmerItems }/>
  
        <SolutionsCard
          title={<><BsFillPersonFill /> Iniciantes</>}
          cardItems={ beginnerItems }/>
      </SolutionsContainer>
    );
  };

// styled
import styled from "styled-components"
// No seu componente SolutionsContainer
const SolutionsContainer = styled.section`
    max-width: 95%;
    margin: 0 auto;
    color: #fff;

    display: flex;
    
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        gap: 0;
        flex-direction: column;
    }
`;
