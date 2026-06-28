import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { WhyChoose } from './components/WhyChoose'
import { FeaturedProperties } from './components/FeaturedProperties'
import { HowItWorks } from './components/HowItWorks'
import { Categories } from './components/Categories'
import { CTABand } from './components/CTABand'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      <Header />
      <main className="pt-[81px]">
        <Hero />
        <Stats />
        <WhyChoose />
        <FeaturedProperties />
        <HowItWorks />
        <Categories />
        <CTABand />
        <Footer />
      </main>
    </div>
  )
}

export default App
