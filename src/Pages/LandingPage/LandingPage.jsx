
import { AppHeader } from './Components/AppHeader/AppHeader'
import { HeroSection } from './Components/HeroSection/HeroSection'
import { StudioBannerComponent } from './Components/StudioBanner/StudioBanner'

export function LandingPage(){
  return(
    <>
      <AppHeader/>
      <HeroSection/>
      <StudioBannerComponent/>
    </>
  )
}
