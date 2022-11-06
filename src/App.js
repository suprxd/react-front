import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ClientLogoSection } from './components/ClientLogoSection';
import { ContactAreaSection } from './components/ContactAreaSection';
import { Testimonial } from './components/Testimonial';
import {CallToActionSection} from './components/CallToActionSection';
import { PricingAreaSection } from './components/PricingAreaSection';
import { ServicesAreaSection } from './components/ServicesAreaSection';

function App() {
  return (
    <div className="App">

      <Header />

      <ServicesAreaSection />
      <PricingAreaSection />
      <CallToActionSection />
      <Testimonial />
      <ClientLogoSection />
      <ContactAreaSection />

      <Footer />
      <a className="back-to-top" href="/#"><i className="lni-chevron-up" /></a>

    </div>
  );
}

export default App;
