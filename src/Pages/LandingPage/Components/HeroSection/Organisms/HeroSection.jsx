// components
import { MainCallToAction } from '../Molecules/MainCallToAction/MainCallToAction';
import { StudioBanner } from '../Molecules/StudioBanner/StudioBanner';

// styled components
import { 
  HeroSectionContaier,
  MainSectionContainer,
  SectionDivider
} from './HeroSection.styled'

export const HeroSection = () => {
  return ( 
    <main>
      <MainSectionContainer>
        {/* background spinning stars */}
        <div className="space stars1"></div>
        <div className="space stars2"></div>
        <div className="space stars3"></div>

        {/* hero section */}
        <HeroSectionContaier>
            <MainCallToAction/>
        </HeroSectionContaier>
      </MainSectionContainer>
      <SectionDivider/>

      <StudioBanner/>
    </main>
  );
};