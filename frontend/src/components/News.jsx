import React from 'react'
import Tittle from './Tittle'
import { assets } from '../assets/assets'

function News() {
  return (
    <div className='text-center px-4 py-10'>
      {/* Section Title */}
      <div className='mb-12 max-w-2xl mx-auto'>
        <Tittle className='sm:ml-28 ml-16' text1={""} text2={"Latest News and Resources"} />
        <p className='text-gray-400'>See the developments that have occurred to Skillines in the world</p>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row gap-8 justify-center'>

        {/* Left News Card */}
        <div className='lg:w-1/3 flex flex-col items-center'>
          <img className='w-[70%] rounded-xl mb-4' src={assets.news} alt="Main News" />
          <br />
          <p className='bg-[#F4C467] text-xs w-fit px-3 py-1 rounded-2xl mb-2  top-1/2'>News</p>
          <h3 className='text-[#252641] font-semibold text-lg mb-3 px-4'>
            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
          </h3>
          <p className='text-gray-600 mb-2 px-4'>
            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
          </p>
          <a className='text-[#F48C06] underline font-medium px-4' href="#">Read more</a>
        </div>

        {/* Right Side Smaller News Blocks */}
        <div className='lg:w-4/10 flex flex-col gap-6 '>

          {/* News Block 1 */}
          <div className='flex gap-4 items-start'>
            <img src={assets.news1} className='w-[70%] max-w-[160px] h-[100px] object-cover rounded-lg' alt="Funding News" />
            <div>
              <p className='bg-[#F4C467] text-xs  w-fit px-3 py-1 rounded-2xl mb-2'>PRESS RELEASE</p>
              <h3 className='font-semibold text-[#252641] mb-1'>
                Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
              </h3>
              <p className='text-gray-500 text-sm'>
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>

          {/* News Block 2 */}
          <div className='flex gap-4 items-start'>
            <img src={assets.news2} className='w-[70%] max-w-[160px] h-[100px] object-cover rounded-lg' alt="Zoom investment" />
            <div>
              <p className='bg-[#F4C467] text-xs w-fit px-3 py-1 rounded-2xl mb-2'>News</p>
              <h3 className='font-semibold text-[#252641] mb-1'>
                Zoom’s earliest investors are betting millions on a better Zoom for schools
              </h3>
              <p className='text-gray-500 text-sm'>
                Zoom was never created to be a consumer product. Nonetheless, the...
              </p>
            </div>
          </div>

          {/* News Block 3 */}
          <div className='flex gap-4 items-start'>
            <img src={assets.news3} className='w-[70%] max-w-[160px] h-[100px] object-cover rounded-lg' alt="LMS features on Zoom" />
            <div className='e'>
              <p className='bg-[#F4C467] text-xs w-fit px-3 py-1 rounded-2xl mb-2'>News</p>
              <h3 className='font-semibold text-[#252641] mb-1'>
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms
              </h3>
              <p className='text-gray-500 text-sm'>
                This year, investors have reaped big financial returns from betting on Zoom...
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default News
