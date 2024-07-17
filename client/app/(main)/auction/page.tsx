'use client';
import React from 'react';
import Carousel from '@/components/Auction/Carousel';
import CountdownCard from '@/components/Auction/CountdownCard';
import Image from 'next/image';
import antique from '@/public/assets/antique.svg'
import CommonNavBar from '@/components/CommonNavBar';
import BusinessBanner from '@/components/Auction/wantToListYourAuction';
import AuctionBottomSection from '@/components/Auction/auctionBottomSection';
import Footer from '@/components/MarketPlace/footer'
import ExploreAuctionsSection from '@/components/Auction/exploreAuctionsSection';


const page = () => {
  return (
    <div className=''>
      <CommonNavBar/>
      <Carousel/>
      <div className="flex flex-col gap-y-4 md:flex-row justify-between md:w-[60%] py-10 md:py-20 mx-auto">
        <div className='flex flex-col items-center gap-y-5 flex-1'>
          <h1 className='text-primary text-2xl text-center'>Summer Ethiopian  Antiques <br/> & Interiors Auction</h1>
          <Image src={antique} alt="bidimage" className='' />
        </div>
        <CountdownCard/>
      </div>
      <BusinessBanner />
      <ExploreAuctionsSection />
      <AuctionBottomSection />
      <Footer />
    </div>
  )
}

export default page
