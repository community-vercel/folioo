import ComputerVisionApplications from "@/app/components/ai/ComputerVisionSection/ComputerVisionApplications";
import ComputerVisionSection from "@/app/components/ai/ComputerVisionSection/ComputerVisionSection";
import ComputerVisionServices from "@/app/components/ai/ComputerVisionSection/ComputerVisionServices";
import FaqSection from "@/app/components/ai/ComputerVisionSection/FaqSection";
import FeaturedProductsvison from "@/app/components/ai/ComputerVisionSection/featuredprioducts";
import IndustryVerticals from "@/app/components/ai/ComputerVisionSection/IndustryVerticals";
import PlatformsWeWorkWith from "@/app/components/ai/ComputerVisionSection/PlatformsWeWorkWith";
import WhyChooseUs from "@/app/components/ai/ComputerVisionSection/whyChooseUs";
import ContactForm from "@/app/components/ai/contact";
import Footer from "@/app/components/ai/Footer";
import Header from '../../components/Header';


export default function AiSection() {
return(

    <>
    <Header />
    
<ComputerVisionSection />
<ComputerVisionServices />
<ComputerVisionApplications />
<IndustryVerticals />
<FeaturedProductsvison />
<PlatformsWeWorkWith />
<WhyChooseUs />
<FaqSection />

<ContactForm />

<Footer />
    </>

)
}