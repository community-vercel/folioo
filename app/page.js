import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PartnersAwards from './components/Awardsection';
import WhoWeWorkWith from './components/WhoWeWorkWith';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      < PartnersAwards />
      <Services />
      <WhoWeWorkWith />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}