import React from 'react'

const Creatercard = (props) => {
  return (<div className=" flex flex-col box-border gap-y-2 justify-center items-center p-4 py-7 w-full bg-[#EFDFC4] text-black rounded-2xl shadow-lg ">
        <div className='flex justify-center items-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#E78732]'><span className='text-5xl md:text-7xl'>🧑‍💻</span></div>
      <div className='text-2xl md:text-3xl text-center'><span className='font-bold text-[#1D1105]'>{props.creatername}</span></div>
        <div className='text-lg md:text-xl text-center'><span className=''>{props.desc}</span></div>
      <div className='text-base md:text-xl p-4 md:p-7 italic text-center w-[90%]'><span className=''>"{props.text}"</span></div>
    </div>
  )
}

export default Creatercard