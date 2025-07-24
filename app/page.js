import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/ai/Footer';
import PartnersAwards from './components/Awardsection';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import ScrollingLogo from './components/CustomerCarousel';
import WorldPresenceSection from './components/WorldPresenceSection';
import MilestonesSection from './components/MilestonesSection'
import Packages from './components/Packages';
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PartnersAwards />
      <Services />
      <Packages />
      <WhoWeWorkWith />
      <ScrollingLogo />
      {/* <Clients /> */}
      <Testimonials />
      <WorldPresenceSection />
      <MilestonesSection />
      <Contact />
      <Footer />
    </div>
  );
}