import React from 'react'
import { assets } from '../assets/assets'
import Tittle from './Tittle'

function Hero() {
  return (
    <div className="relative bg-[#FFF2E1] overflow-hidden">

      {/* Main Hero Content */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-10 lg:px-20 py-12">
        
        {/* Left Content */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-start text-center sm:text-left text-[#414141]">
          <div className='w-full'>
            <Tittle 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-snug lg:leading-tight"
              text1="Studying Online is"
              text2="Now"
              text3="much easier"
            />
          </div>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-md">
            Skilline is an interesting platform that will teach you in a more interactive way.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8'>
            {/* Join Button */}
            <button className="h-14 sm:h-16 text-lg sm:text-lg md:text-xl relative overflow-hidden bg-gradient-to-r from-[#F48C06] to-[#d97706] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#d97706] to-[#F48C06] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Join for free</span>
            </button>

            <button className="flex items-center gap-2 text-sm rounded-full bg-white text-[#252641] font-medium">
              <div className="w-8 h-12 md:h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-transparent">
                <img
                  src={assets.play}
                  alt="Play"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="relative z-10 whitespace-nowrap">
                Watch how it works
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <img 
            className='w-full mx-auto sm:mx-0' 
            src={assets.hero_img} 
            alt="Hero" 
          />
        </div>
      </div>

      {/* SVG Curve Bottom */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
        <path fill="white" d="M0,0 C360,150 1080,150 1440,0 L1440,150 L0,150 Z" />
      </svg>
    </div>
  )
}

export default Hero
