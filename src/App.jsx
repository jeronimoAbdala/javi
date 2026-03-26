import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ValueProps from './components/ValueProps'
import Clients from './components/Clients'
import Problems from './components/Problems'
import HowWeWork from './components/HowWeWork'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ValueProps />
        <Clients />
        <Problems />
        <HowWeWork />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
