import React from 'react'
import Navbar from '../Components/Navbar'
import HomePromoSection from '../Components/Home/HomePromoSection'
import Footer from '../Components/Footer'
import HotSellersSection from '../Components/Home/HotSellersSection'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomePromoSection/>
      <HotSellersSection/>

      <Footer/>
    </div>
  )
}

export default HomePage