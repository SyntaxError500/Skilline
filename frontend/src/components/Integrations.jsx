import React from 'react'
import { assets } from '../assets/assets'
import Tittle from './Tittle'

function Integrations() {
  return (
     <div className="pl-4 md:ml-40 sm:pl-12 py-12 mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-12">

      <div className="ml-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
        <div className="flex flex-col gap-8">
          <img src={assets.onedrive} alt="OneDrive" className="w-32 h-auto" />
          <img src={assets.dropbox} alt="Dropbox" className="w-32 h-auto" />
        </div>
        <div className="flex flex-col gap-8">
          <img src={assets.drive} alt="Google Drive" className="w-32 h-auto" />
          <img src={assets.teams} alt="Teams" className="w-32 h-auto" />
        </div>
      </div>

      <div className="text-center sm:text-left mx-auto px-4 sm:px-12 max-w-2xl">

        <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-[#525596] font-semibold whitespace-nowrap">INTEGRATIONS</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <Tittle className="font-medium mb-4" text1={"200+ educational tools and platform"} text2={"integrations"} />

        <p className="text-gray-600 leading-relaxed mb-6">
          Schoology has every tool your classroom needs and comes
          <br className="hidden sm:block" />
          pre-integrated with more than 200+ tools, student information
          <br className="hidden sm:block" />
          systems (SIS), and education platforms.
        </p>

        <button className="bg-transparent border-2 rounded-full border-[#F48C06] text-[#F48C06] px-6 py-2 h-14 font-medium hover:bg-[#F48C06] hover:text-white transition-all duration-200">
          See All Integration
        </button>
      </div>
    </div>


  )
}

export default Integrations