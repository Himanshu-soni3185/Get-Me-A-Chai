import React from 'react'

const Card = (props) => {
  return (
    <div className=" flex flex-col gap-y-2 justify-center items-center p-3 py-5 w-full bg-[#EFDFC4] text-black italic rounded-2xl shadow-lg ">
      <div className='text-lg md:text-2xl text-center'>{props.text}</div>
      <div className='text-base md:text-xl text-center'>{props.community}</div>
    </div>
  )
}

export default Card