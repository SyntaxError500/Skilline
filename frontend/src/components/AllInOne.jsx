import React from 'react';
import Tittle from './Tittle';
import { assets } from '../assets/assets';
import './AllInOne.css';



function AllInOne() {
  return (
    <div className="text-center mb-8 px-4 py-12">
    
    
      <div className="mb-12 max-w-2xl mx-auto">
        <Tittle className="sm:ml-24" text1="All-in-one" text2="Cloud Software" />
        <span className="text-gray-600">
          Skilline is one powerful online software suite that combines all the <br className="hidden sm:inline" />
          tools needed to run a successful school or office.
        </span>
      </div>


      <div className="flex flex-wrap justify-center gap-8">
     
     
        <div className="text-center flex flex-col items-center w-72 p-4 shadow rounded-xl">
          <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#5B72EE] mb-6 ">
            <img src={assets.file} alt="File icon" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-[#2F327D] font-bold text-lg mb-4 ">
            Online Billing, Invoicing, & Contracts
          </h3>
          <p className="text-gray-600 text-sm">
            Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.
          </p>
        </div>

     
     
        <div className="text-center flex flex-col items-center w-72 p-4 shadow rounded-xl">
          <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#F48C06] mb-6">
            <img src={assets.calender} alt="Schedule icon" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-[#2F327D] font-bold text-lg mb-4">
            Easy Scheduling & Attendance Tracking
          </h3>
          <p className="text-gray-600 text-sm">
            Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.
          </p>
        </div>


        <div className="text-center flex flex-col items-center w-72 p-4 shadow rounded-xl">
          <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#29B9E7] mb-6">
            <img src={assets.customer} alt="Customer tracking icon" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-[#2F327D] font-bold text-lg mb-4">
            Customer Tracking
          </h3>
          <p className="text-gray-600 text-sm">
            Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AllInOne;
