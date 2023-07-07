import Header from './header'
import Footer from './footer'
import HomeSection from './home-section'
import Services from './services'
import Contact from './contact'
import About from './about'

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
