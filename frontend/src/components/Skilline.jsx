import React from 'react'
import Tittle from './Tittle'
import { assets } from '../assets/assets'

function Skilline() {
  return (
    <div className='text-center px-2 py-10'>
          
               <div className="mb-12 max-w-2xl  mx-auto">
         <Tittle className='sm:ml-40 ml-16' text1={"What is"} text2={"Skilline ?"}/>
       <span className='text-gray-400'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online manage assignments, quizzes and exams monitor due dates grade result and provide students with feedback all in one place</span>
      </div>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-16 ">
       <div
          className="h-[200px] w-[300px] rounded-2xl shadow-xl bg-cover bg-center flex flex-col items-center justify-center text-white px-6"
          style={{ backgroundImage: `url(${assets.instructor})` }}
        >
          <p className="text-2xl mr-10 mt-4 drop-shadow-lg">FOR INSTRUCTORS</p>
          <button className="px-6 py-3 mr-10 mt-4 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition duration-300">
            Start a Classes today
          </button>
        </div>

        <div
          className="h-[200px] w-[300px] rounded-2xl shadow-xl bg-cover bg-center flex flex-col items-center justify-center text-white px-6"
          style={{ backgroundImage: `url(${assets.students})` }}
        >
          <p className="text-2xl mr-10 mt-4 drop-shadow-lg">{"For Students".toUpperCase()}</p>
          <button className="px-6 py-3 mr-10 mt-4  rounded-full bg-[#23BDEEE5] hover:bg-white hover:text-black transition duration-300">
            enter access code
          </button>
        </div>



    </div>
  <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:px-16 my-12">


  <div className="md:w-1/2 ">
    <Tittle 
      text1="Everything you can do in a physical classroom," 
      text2="you can do with Skilline" 
    />
    <p className="text-gray-600 mt-4">
      Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
    </p>
    <a href="#" className="underline text-[#252641] font-medium mt-3 inline-block">Learn more</a>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <img 
      src={assets.teacher} 
      alt="teacher" 
      className="w-full max-w-md h-auto object-cover rounded-2xl shadow-md" 
    />
  </div>
</div>




    </div>
  )
}

export default Skilline