'use client';


import Footer from '@/app/components/ai/Footer';
import Header from '@/app/components/Header';
import CloudMigrationSection7 from '@/app/components/datacloud/cloud-migration-services/CloudMigrationSection';

import CloudMigrationSection from '@/app/components/datacloud/cloud-migration-services/Hero';
import AdataMigrationService from '@/app/components/datacloud/cloud-migration-services/MigrationService';
import MultiCloudAndProcess from '@/app/components/datacloud/cloud-migration-services/MultiCloudAndProcess';
import DiscoveryCaseStudy from '@/app/components/datacloud/cloud-migration-services/DiscoveryCaseStudy';
import DiscoveryCase from '@/app/components/datacloud/cloud-migration-services/DiscoveryCase';


export default function CloudMigration() {

  return (
    <>
      <Header/>
      <CloudMigrationSection />
      <CloudMigrationSection7 />
      <AdataMigrationService />
      <MultiCloudAndProcess />
      <DiscoveryCaseStudy />
      <DiscoveryCase />
      
                                    <Footer />
    
    </>
  );
}