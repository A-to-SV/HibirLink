import React from 'react';
import HomeNavBar from '@/components/Home/Hero/HomeNavBar';
import MainHero from '@/components/Home/Hero/MainHero';
import AuctionShippingComponent from '@/components/Home/Hero/AuctionComponent';
import Footer from '@/components/Footer';


export default function Page() {
  return (
    <div>
      <HomeNavBar/>
      <MainHero/>
      <AuctionShippingComponent/>
      <Footer/>
    </div>
  );
}


