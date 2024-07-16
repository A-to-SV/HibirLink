import BusinessBanner from '@/components/Services/doYouOfferServices'
import ServiceCard from '@/components/Services/serviceCard'
import Footer from '@/components/MarketPlace/footer'
import React from 'react';
import CommonNavBar from '@/components/CommonNavBar';

const page = () => {
  return (
    <div>
      <CommonNavBar />
      <BusinessBanner />
      <ServiceCard />
      <Footer />
    </div>
  )
}

export default page
