import BusinessBanner from '@/components/Services/doYouOfferServices'
import ServiceCard from '@/components/Services/serviceCard'
import Footer from '@/components/MarketPlace/footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <BusinessBanner />
      <ServiceCard />
      <Footer />
    </div>
  )
}

export default page
