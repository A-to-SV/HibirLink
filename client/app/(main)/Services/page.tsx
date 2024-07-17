'use client';
import BusinessBanner from '@/components/Services/doYouOfferServices'
import Footer from '@/components/MarketPlace/footer'
import React from 'react';
import CommonNavBar from '@/components/CommonNavBar';
import ExploreServiceProviders from '@/components/Services/exploreServices';
import ServicesBottomSection from '@/components/Services/servicesBottomSection';
import ServicesSlider from '@/components/Services/servicesSlider';

const page = () => {
  return (
    <div>
      <CommonNavBar />
      <ServicesSlider />
      <ExploreServiceProviders />
      <BusinessBanner />
      <ServicesBottomSection />
      <Footer />
    </div>
  )
}

export default page
