import React from 'react';

const Tittle = ({ text1, text2,text3="",className=""}) => {
  return (
     <div className=" p-4 w-fit relative">


      <h1 className={`text-2xl sm:text-3xl font-bold leading-snug font-poppins text-[#2F327D] ${className}`}>
        <span className="text-[#F48C06]">{text1}</span> {text2} <br /> {text3}
      </h1>
    </div>
  );
};

export default Tittle;
