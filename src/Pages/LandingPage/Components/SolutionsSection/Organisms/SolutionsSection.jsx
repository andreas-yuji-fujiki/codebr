// components import
import { SolutionCardsWrapper } from "../Molecules/SolutionCardsWrapper"
import { CreationSteps } from "../Molecules/CreationSteps"

// solutions section component
export const SolutionsSection = () => {
  return (
    <SolutionsSectionContainer>

      <CreationSteps/>
      <SolutionCardsWrapper/>
      
    </SolutionsSectionContainer>
  )
}

// styled
import styled from "styled-components"

const SolutionsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 85px;
  padding: 85px 0 170px 0;
`