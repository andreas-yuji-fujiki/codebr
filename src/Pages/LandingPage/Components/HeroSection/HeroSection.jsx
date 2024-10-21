// components
import { MainCallToAction } from './Molecules/MainCallToAction/MainCallToAction';

// styled components
import { 
  HeroSectionContaier,
  Section
} from './HeroSection.styled'

export const HeroSection = () => {
  return ( 
    <Section>
      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>
      <HeroSectionContaier>
        <MainCallToAction/>
      </HeroSectionContaier>
    </Section>
  );
};