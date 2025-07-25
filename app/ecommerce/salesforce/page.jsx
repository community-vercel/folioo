import Header from "@/app/components/ecommerece/Header";
import SalesforceSuccessSlider from "@/app/components/ecommerece/saleforce/EnterpriseTestimonial";
import HeroSalesforce from "@/app/components/ecommerece/saleforce/HeroSalesforce";
import SalesforceBenefitsAndFAQ from "@/app/components/ecommerece/saleforce/SalesforceBenefitsAndFAQ";
import ContactForm from "../../components/ai/contact";
import SalesforceExpertise from "@/app/components/ecommerece/saleforce/SalesforceExpertise";
import SalesforceServices from "@/app/components/ecommerece/saleforce/SalesforceServices";
import Testimonials from "@/app/components/ecommerece/saleforce/Testimonials";
import Footer from '../../components/ai/Footer';

export default function Salesforce() {

    return(

        <>
      <Header />
<HeroSalesforce /> 
<SalesforceExpertise />
<SalesforceSuccessSlider />

<Testimonials />

<SalesforceServices />
<SalesforceBenefitsAndFAQ />
<ContactForm />
<Footer />
</>
    )

}
