// components
import { MainCallToAction } from './Molecules/MainCallToAction/MainCallToAction';
import { StudioBannerComponent } from './Molecules/StudioBanner/StudioBanner';

// styled components
import { 
  HeroSectionContaier,
  Section,
  SectionDivider
} from './HeroSection.styled'

export const HeroSection = () => {
  return ( 
    <>
      <Section>
        <div className="space stars1"></div>
        <div className="space stars2"></div>
        <div className="space stars3"></div>

        <HeroSectionContaier>
          <MainCallToAction/>
        </HeroSectionContaier>
      </Section>
      <SectionDivider></SectionDivider>
      <StudioBannerComponent/>
    </>
  );
};