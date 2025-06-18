
import ContactForm from "@/app/components/ai/contact";
import Footer from "@/app/components/ai/Footer";
import AugmentMLOpsSection from "@/app/components/ai/machine-learning/AugmentMLOpsSection";
import MachineFaqSection from "@/app/components/ai/machine-learning/FaqSection";
import MachineFApplications from "@/app/components/ai/machine-learning/MachineApplications";
import MachineFeaturedProductsvison from "@/app/components/ai/machine-learning/Machinefeaturedprioducts";
import MlTechStack from "@/app/components/ai/machine-learning/MachineIndustryVerticals";
import MachineIndustryVerticals from "@/app/components/ai/machine-learning/MachineIndustryVerticals";
import MachineLearningSection from "@/app/components/ai/machine-learning/MachineLearningSection";
import MachinePlatformsWeWorkWith from "@/app/components/ai/machine-learning/MachinePlatformsWeWorkWith";
import MachineSection from "@/app/components/ai/machine-learning/MachineSection";
import MachineServices from "@/app/components/ai/machine-learning/MachineServices";
import MachineeWhyChooseUs from "@/app/components/ai/machine-learning/MachinewhyChooseUs";
import Whatwedo from "@/app/components/ai/machine-learning/whatwedo";
import Header from '../../components/Header';


export default function MLSection() {
return(

    <>
       <Header />
    
<MachineSection />
<MachineServices />
<MachineLearningSection />
<AugmentMLOpsSection />
<MachineFApplications />
<MlTechStack />
{/* <MachineFeaturedProductsvison /> */}
{/* <MachinePlatformsWeWorkWith /> */}
<MachineeWhyChooseUs />
<Whatwedo />
<MachineFaqSection />

<ContactForm />

<Footer />
    </>

)
}