import React from 'react'

const Card = (props) => {
  return (
    <div className=" flex flex-col gap-y-2 justify-center items-center p-4 md:p-6 w-[95%] md:w-[90%] max-w-full mx-auto bg-[#EFDFC4] text-black italic rounded-2xl shadow-lg ">
      <div className='text-base md:text-2xl text-center break-words w-full'>{props.text}</div>
      <div className='text-sm md:text-xl text-center break-words w-full mt-2'>{props.community}</div>
    </div>
  )
}

export default Card