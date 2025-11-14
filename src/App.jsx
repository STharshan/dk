import HeroSection from "./components/Hero"
import Testimonial from "./components/Testimonial"
import IntroSection from "./components/IntroSection"
import AboutSection from "./components/AboutSection"
import WhyChoose from "./components/WhyChoose"
import Contact from "./components/Contact"
import ServiceSection from "./components/ServiceSection"
import Gallery from "./components/Gallery"
import CTASection from "./components/CTA"
import FooterSection from "./components/Footer"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
    <Navbar />
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <Gallery />
      <AboutSection />
      <WhyChoose />
      <CTASection />
      <Testimonial />
      <Contact />
      <FooterSection />
    </>
  )
}

export default App
