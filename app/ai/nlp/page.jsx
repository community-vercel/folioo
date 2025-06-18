
import ContactForm from "@/app/components/ai/contact";
import Footer from "@/app/components/ai/Footer";

import Header from '../../components/Header';
import NaturalpSectionSS from "@/app/components/ai/nlp/AnlpMachineSection";
import NlpSolutions from "@/app/components/ai/nlp/NLPServices/NLPService";
import NlpSolutionsSection from "@/app/components/ai/nlp/NlpServicesSection";
import NlpWhyChooseUs from "@/app/components/ai/nlp/nlpMachinewhyChooseUs";
import NlpFaqSection from "@/app/components/ai/nlp/FaqSection";

export default function MLSection() {
return(

    <>
       <Header />
       <NaturalpSectionSS />
    <NlpSolutions />
<NlpSolutionsSection />
<NlpWhyChooseUs />
<NlpFaqSection />
<ContactForm />

<Footer />
    </>

)
}