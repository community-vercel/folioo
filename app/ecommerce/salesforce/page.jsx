import Header from "@/app/components/ecommerece/Header";
import SalesforceSuccessSlider from "@/app/components/ecommerece/saleforce/EnterpriseTestimonial";
import HeroSalesforce from "@/app/components/ecommerece/saleforce/HeroSalesforce";
import SalesforceBenefitsAndFAQ from "@/app/components/ecommerece/saleforce/SalesforceBenefitsAndFAQ";
import ContactForm from "@/app/components/ecommerece/saleforce/SalesforceContactForm";
import SalesforceExpertise from "@/app/components/ecommerece/saleforce/SalesforceExpertise";
import SalesforceServices from "@/app/components/ecommerece/saleforce/SalesforceServices";
import Testimonials from "@/app/components/ecommerece/saleforce/Testimonials";


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
</>
    )

}
