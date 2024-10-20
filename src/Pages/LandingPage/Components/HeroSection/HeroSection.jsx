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
      <HeroSectionContaier>
        <MainCallToAction/>
      </HeroSectionContaier>
    </Section>
  );
};