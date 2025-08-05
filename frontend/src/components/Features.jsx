import React from 'react';
import Tittle from './Tittle';
import { assets } from '../assets/assets';

function Features() {
  return (
    <div className="px-4 py-16">
    
      <div className="mb-12 max-w-2xl mx-auto text-center">
        <Tittle className="sm:ml-40 ml-16" text1={"Our"} text2={"Features"} />
        <span className="text-gray-400">
          This very extraordinary feature can make learning activities more efficient
        </span>
      </div>

  
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        
        <div className="min-h-[500px] w-full sm:w-[600px] relative flex justify-center items-center">
       
         <div className="w-[80%] flex flex-wrap justify-around items-center gap-8 h-[300px] border-2 border-[#EAEAEA] bg-[#F4F4F4] backdrop-blur-sm rounded-2xl shadow-md z-10 px-6 py-4">
  
  <div className="flex flex-col items-center gap-4">
    <img src={assets.person1} alt="Person 1" className="w-40 h-40 object-cover  shadow-sm" />
    <div className="flex gap-3">
      <button className="px-4 py-1 text-sm bg-[#3465E1] text-white rounded-full hover:bg-[#d87a04] transition">Person</button>
      <button className="px-4 py-1 text-sm border bg-[#E13468] text-white rounded-full hover:bg-[#fef3e5] transition">Call</button>
    </div>
  </div>

  <div className="flex flex-col items-center gap-3">
    <img src={assets.person3} alt="Person 3" className="w-20 h-20 object-cover rounded-lg shadow" />
    <img src={assets.person2} alt="Person 2" className="w-20 h-20 object-cover rounded-lg shadow" />
  </div>

  <div className="flex flex-col items-center gap-3">
    <img src={assets.person5} alt="Person 5" className="w-20 h-20 object-cover rounded-lg shadow" />
    <img src={assets.person4} alt="Person 4" className="w-20 h-20 object-cover rounded-lg shadow" />
  </div>

</div>



          <div className="h-[140px] w-[140px] bg-[#33EFA0] rounded-full absolute top-11 left-25 z-0"></div>

          <div className="h-[14px] w-[14px] bg-[#EE6767] rounded-full absolute top-26 left-20 z-20"></div>
          <div className="h-[14px] w-[14px] bg-[#F6C566] rounded-full absolute top-26 left-25 z-20"></div>
          <div className="h-[14px] w-[14px] bg-[#33EFA0] rounded-full absolute top-26 left-30 z-20"></div>


          <div className="h-[140px] w-[140px] bg-[#5B61EB] rounded-full absolute bottom-10 right-25 z-0"></div>
        </div>

        <div className="flex flex-col gap-6  max-w-sm sm:mt-4 mt-12">
              <div className=''>
                <Tittle className='font-medium' text1={"A user interface"} text2={" designed for the classroom"}/>
              </div>
              <div className='flex items-center justify-between'>
                <img className=' object-cover' src={assets.icon1} alt="icon 1" />
                <p className='ml-4 text-gray-800'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
              </div>
              <div className='flex items-center justify-between'>  <img className=' object-cover' src={assets.icon2} alt="icon 1" />
                <p className='ml-4 text-gray-800'>TA’s and presenters can be moved to the front of the class.</p></div>
              <div className='flex items-center justify-between'>   <img className=' object-cover' src={assets.icon3} alt="icon 1" />
                <p className='ml-4 text-gray-800'>Teachers can easily see all students and class data at one time.</p></div>
        </div>

      </div> ;

      <div className='flex flex-col sm:flex-row justify-center items-center gap-8 sm:ml-28'>
             <div className='flex flex-col gap-6  max-w-sm sm:mt-4 mt-12 sm:pl-12'>
                <Tittle className='font-medium' text1={"Tools"} text2={"For Teachers And Learners"}/>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                  Teachers can handout assignments in real-time for students to complete and submit.
                </p>
              </div>
              <div className='md:w-1/2 flex justify-center'>
                <img className='w-full max-w-md h-auto object-cover' src={assets.model1} alt="" />
              </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
             <div className='md:w-1/2 flex justify-center'>
                <img className='w-full max-w-md h-auto object-cover' src={assets.feature3} alt="" />
              </div>
              <div className='flex flex-col gap-6  max-w-sm sm:mt-4 mt-12'>
                <Tittle className='font-medium' text1={"Assessments,"} text2={" Quizzes,"} text3='Tests'/>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                Teachers can handout assignments in real-time for students to complete and submit.</p>
              </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-8 sm:ml-28'>
         <div className='flex flex-col gap-6  max-w-sm sm:mt-4 mt-12 '>
                <Tittle className='font-medium' text1={"Class Management"} text2={"  Tools for Educators"} />
                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and 
                  more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                </p>
              </div>
             <div className='md:w-1/2 flex justify-center'>
                <img className='w-full max-w-md h-auto object-cover' src={assets.feature4} alt="" />
              </div>
      </div>
       <div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
             <div className='md:w-1/2 flex justify-center'>
                <img className='w-full max-w-md h-auto object-cover' src={assets.feature5} alt="" />
              </div>
              <div className='flex flex-col gap-6  max-w-sm sm:mt-4 mt-12'>
                <Tittle className='font-medium' text1={"One-on-One"} text2={" Discussions"} />
                <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
              </div>
      </div>
      <div className='mb-12 max-w-2xl mx-auto text-center'>
        <button className="px-6 py-3 mr-10 mt-4 border text-[#F48C06] border-[#F48C06] rounded-full bg-transparent hover:bg-[#F48C06] hover:text-white transition duration-300">
            Start a Classes today
          </button>
      </div>
    </div>
    
  );
}

export default Features;