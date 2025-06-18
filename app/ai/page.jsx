import AiServicesSection from "../components/ai/AiServicesSection";
import Clients from "../components/ai/clients";
import ComputerVison from "../components/ai/Computervision";
import ContactForm from "../components/ai/contact";
import FeaturedProducts from "../components/ai/featuredprioducts";
import Footer from "../components/ai/Footer";
import HeroSection from "../components/ai/HeroSection";

export default function AiSection() {
return(

    <>
    
    <HeroSection />
    <AiServicesSection />

    <ComputerVison />
    <FeaturedProducts />
    <Clients />
    <ContactForm />
    <Footer />
    </>

)
}