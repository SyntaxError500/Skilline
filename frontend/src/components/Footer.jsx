import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    
<footer className="bg-[#252641] text-white py-12 px-4 text-center relative ">
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
    <img src={assets.footer} alt="Logo" className="w-12 h-12 object-contain" />
    <span className="text-lg font-semibold">Virtual Zoom Class</span>
  </div>

  <p className="text-2xl sm:text-3xl font-semibold text-gray-100">
    Subscribe to Get our <span className="text-[#FFD700]">Newsletter</span>
  </p>


  <form className="w-full sm:w-[80%] md:w-1/2 mx-auto mt-6 flex flex-col sm:flex-row items-center gap-3">
 <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          required
          className="w-full flex-1 px-4 py-3 rounded bg-[#1f1f2e] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
        />
 
    <button type="submit" className="bg-[#393FCF] text-white text-sm px-6 py-3 rounded-md hover:bg-[#2e32a1] transition-colors" >  Subscribe</button>
  </form>

  


  <div className="mt-10 text-sm flex flex-col sm:flex-row justify-center items-center gap-6">
    <span className="hover:underline cursor-pointer">Careers</span>
    <span className="hover:underline cursor-pointer">Privacy Policy</span>
    <span className="hover:underline cursor-pointer">Terms and Conditions</span>
  </div>

  

  
  <div className="mt-6 text-xs text-gray-400">
    © 2021 Class Technologies Inc.
  </div>
</footer>

  )
}

export default Footer