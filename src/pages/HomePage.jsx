import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TrustSection from '../components/TrustSection'
import HowItWorks from '../components/HowItWorks'
import WhyItMatters from '../components/WhyItMatters'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <TrustSection />
        <HowItWorks />
        <WhyItMatters />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
