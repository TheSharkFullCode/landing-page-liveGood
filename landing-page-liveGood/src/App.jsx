import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import OwnerSection from './components/OwnerSection/OwnerSection'
import MatrizForzadaSection from './components/MatrizForzadaSection/MatrizForzadaSection'
import VideoSection from './components/VideoSection/VideoSection'
import Products from './components/Products/Products'
import Testimonials from './components/Testimonials/Testimonials'
import HowToStart from './components/HowToStart/HowToStart'
import ContactLinks from './components/ContactLinks/ContactLinks'
import LeadForm from './components/LeadForm/LeadForm'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero />
        <OwnerSection />
        <MatrizForzadaSection />
        <VideoSection />
        <Products />
        <Testimonials />
        <HowToStart />
        <ContactLinks />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
