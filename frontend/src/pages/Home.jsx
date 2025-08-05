import React from 'react'
import Tittle from '../components/Tittle'
import Hero from '../components/Hero'
import { assets } from '../assets/assets'
import AllInOne from '../components/AllInOne'
import Skilline from '../components/Skilline'
import Features from '../components/Features'
import Integrations from '../components/Integrations'
import Say from '../components/Say'
import News from '../components/News'
assets
function Home() {
  return (
    <div className=''>
        <Hero/>
       <div className="w-full flex flex-col items-center gap-6 py-10">
  <p className="text-center text-lg sm:text-xl font-semibold text-[#252641]">
    Trusted by <span className="text-primary font-bold">5,000+ Companies</span> Worldwide
  </p>

  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-4 sm:px-8 max-w-[90%] sm:max-w-[75%] md:max-w-[80%]">
    <span className="w-24 sm:w-28 hover:scale-105 ">
      <img src={assets.google} alt="Google Logo" className="w-full h-auto object-contain" />
    </span>
    <span className="w-24 sm:w-28 hover:scale-105 ">
      <img src={assets.netflix} alt="Netflix Logo" className="w-full h-auto object-contain" />
    </span>
    <span className="w-24 sm:w-28 hover:scale-105 ">
      <img src={assets.airbnb} alt="Airbnb Logo" className="w-full h-auto object-contain" />
    </span>
    <span className="w-24 sm:w-28 hover:scale-105 ">
      <img src={assets.amazon} alt="Amazon Logo" className="w-full h-auto object-contain" />
    </span>
    <span className="w-24 sm:w-28 hover:scale-105 ">
      <img src={assets.facebook} alt="Facebook Logo" className="w-full h-auto object-contain" />
    </span>
    <span className="w-24 sm:w-28 hover:scale-105 ">
      <img src={assets.grab} alt="Grab Logo" className="w-full h-auto object-contain" />
    </span>
  </div>
</div>
    <AllInOne/>
    <Skilline/>
    <Features/>
    <Integrations/>
    <Say/>
    <News/>
    </div>
  )
}

export default Home