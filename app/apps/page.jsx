'use client';

import { fromJSON } from "postcss";
import Header from "../components/Header";
import NlpHeroSection from "../components/apps/HeroSection";
import AppHeroSections from "../components/apps/HeroSection";
import IndustriesSlider from "../components/apps/IndustriesSlider";
import AppIndustriesSlider from "../components/apps/IndustriesSlider";
import GlobalReach from "../components/apps/GlobalReach";
import InnovationSection from "../components/apps/InnovationSection";
import TechStack from "../components/apps/TechStack";
import MethodologyAndEngagement from "../components/apps/MethodologyAndEngagement";
import Clients from "../components/apps/clients";
import ContactForm from "../components/ai/contact";
import Footer from "../components/ai/Footer";
export default function App() {

  return (
    <>
    
      <Header />
      <AppHeroSections />
      <AppIndustriesSlider />
      <GlobalReach />
      <InnovationSection />
      <TechStack />
      <MethodologyAndEngagement />
      <Clients />
      <ContactForm />
      <Footer />
    </>
  );
}