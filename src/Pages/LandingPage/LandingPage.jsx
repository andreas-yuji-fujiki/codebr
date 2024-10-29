
import { AppHeader } from './Components/AppHeader/Organisms/AppHeader'
import { HeroSection } from './Components/HeroSection/Organisms/HeroSection'
import { SolutionsSection } from './Components/SolutionsSection/Organisms/SolutionsSection'

export function LandingPage(){
  return(
    <>
      <AppHeader/>
      <HeroSection/>
      <SolutionsSection/>
    </>
  )
}
