import React from 'react';
import { assets } from '../assets/assets';
import Tittle from './Tittle';

function Say() {
  return (
    <div className='overflow-x-hidden flex sm:flex-row flex-col px-6 sm:px-20 py-12 justify-center items-center bg-white gap-10 mb-12'>

      <div className='w-full sm:w-[320px] flex flex-col justify-center items-center sm:items-start'>
        <div className="flex items-center justify-center sm:justify-start gap-4 mb-4 w-full">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-[#525596] font-semibold whitespace-nowrap text-xs">TESTIMONIAL</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <Tittle text1={""} text2={"What They Say?"} className='font-medium text-2xl text-center sm:text-left' />
        <p className='my-4 text-[#696984] text-center sm:text-left'>Skilline has got more than 100k positive ratings from our users around the world.</p>
        <p className='my-4 text-[#696984] text-center sm:text-left'>Some of the students and teachers were greatly helped by Skilline.</p>
        <p className='my-4 text-[#696984] text-center sm:text-left'>Are you too? Please give your assessment</p>

        <button className='mt-8 flex items-center gap-2 border-2 rounded-full border-[#F48C06] text-[#F48C06] px-6 py-2 h-14 font-medium hover:bg-[#F48C06] hover:text-white transition-all duration-200'>
          Write your assessment
          <span className="text-xl">→</span>
        </button>
      </div>

      <div className='relative w-full max-w-[320px] flex justify-center items-center sm:ml-80'>

        <div className='bg-[#D1E3FF] rounded-xl overflow-hidden p-4 w-full'>
          <img className='rounded-xl w-full object-cover' src={assets.women} alt="Reviewer" />
        </div>

        <div className='absolute -bottom-20 left-3/4 transform -translate-x-1/2 w-[90vw] max-w-[329px] bg-white shadow-lg rounded-xl p-4 border-l-8 border-[#F67766]'>
          <p className="text-sm text-[#5F5F7E] mb-3">
            "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
          </p>
          <div className='flex justify-between items-start'>
            <div className='text-sm font-semibold text-[#5F5F7E]'>Gloria Rose</div>
            <div className="text-xs text-gray-500 text-right">
              <span className='text-yellow-400'>⭐ ⭐ ⭐ ⭐ ⭐</span><br />
              12 reviews at Yelp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Say;
