// components
import { MainCallToAction } from './Molecules/MainCallToAction/MainCallToAction';

// styled components
import { 
  HeroSectionContaier,
  MainSection,
  SectionDivider
} from './HeroSection.styled'

export const HeroSection = () => {
  return ( 
    <>
      <MainSection>
        {/* background spinning stars */}
        <div className="space stars1"></div>
        <div className="space stars2"></div>
        <div className="space stars3"></div>

        {/* main container */}
        <HeroSectionContaier>
          <MainCallToAction/>
        </HeroSectionContaier>
      </MainSection>
      <SectionDivider/>
    </>
  );
};