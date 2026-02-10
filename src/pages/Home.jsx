import HomeHero from '../components/sections/HomeHero'
import About from '../components/sections/About'
import Solutions from '../components/sections/Solutions'
import Features from '../components/sections/Features'
import Numbers from '../components/sections/Numbers'
import Flow from '../components/sections/Flow'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <HomeHero />
      <About />
      <Solutions />
      <Features />
      <Numbers />
      <Flow />
      <FAQ />
      <FinalCTA />
    </>
  )
}
