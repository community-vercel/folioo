'use client';


import Footer from '../components/ai/Footer';
import EcommerceDevelopmentSection from '../components/ecommerece/EcommerceDevelopmentSection';
import EcommerceHelpSection from '../components/ecommerece/EcommerceHelpSection';
import EcommerceGrowth from '../components/ecommerece/ecommerceHero';
import EcommerceScaleSection from '../components/ecommerece/EcommerceScaleSection';
import Header from '../components/ecommerece/Header';
import IndustriesSectors from '../components/ecommerece/industriesSectors';
import PricingLeadershipSection from '../components/ecommerece/PricingLeadershipSection';
import CaseStudies from '../components/ecommerece/shopify/CaseStudies';
import ShopifyDevelopmentSection from '../components/ecommerece/shopify/ShopifyDevelopmentSection';
import TestimonialSlider from '../components/ecommerece/shopify/TestimonialSlider';
import TestimonialSliderEcommerce from '../components/ecommerece/TestimonialSliderEcommerce';
import ContactForm from "../components/ai/contact";

export default function EcommerceHome() {

  return (
    <>
      <Header/>
      <EcommerceGrowth />
      <EcommerceHelpSection />
      <CaseStudies />
            <EcommerceDevelopmentSection />

      <IndustriesSectors />
      <EcommerceScaleSection />

      <PricingLeadershipSection />
                                    <TestimonialSliderEcommerce />
                                    <ContactForm />
                                       <Footer />

    
    </>
  );
}