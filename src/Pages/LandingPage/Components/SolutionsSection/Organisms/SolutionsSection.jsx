// components import
import { SolutionCardsWrapper } from "../Molecules/SolutionCardsWrapper"
import { CreationSteps } from "../Molecules/CreationSteps"
import { SectionTitle } from "../../SectionTitle/SectionTitle"

// solutions section component
export const SolutionsSection = () => {
  return (
    <SolutionsSectionContainer>

      <div>
        <SectionTitle content={<><span className="highlight">3 Passos</span> para criar seu projeto:</>}/>
        <CreationSteps/>
      </div>

      <div>
        <SectionTitle content={<>O Code <span className="highlight">facilita</span> para você:</>}/>
        <SolutionCardsWrapper/>
      </div>
      
    </SolutionsSectionContainer>
  )
}

// styled
import styled from "styled-components"

const SolutionsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 80px 0;
`