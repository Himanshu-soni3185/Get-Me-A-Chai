import React from 'react'


const Supporter_cards = ({supporter}) => {
    return (

    <div className='flex flex-col justify-between rounded-2xl w-full sm:w-85 p-4 py-4 bg-[#EFDFC4]'>
      <div className='flex justify-between items-center gap-2'>
      <div className='flex flex-col items-center shrink-0'>
        <div className='flex justify-center w-10 overflow-hidden'>
          <img className='object-contain w-full h-full' src={supporter.imagelink} alt="Tea" />
        </div>
        <span className='text-[#3d2316] font-bold text-sm md:text-base text-center'>{supporter.teaname}</span>
      </div>

      <div className='flex flex-col w-full md:w-50 font-bold text-[#3d2316] items-center justify-center p-2 gap-y-2'>
        <div className='text-xl md:text-2xl text-center'>{supporter.name}</div>
        <div className='flex items-center justify-center text-sm md:text-base'>
          <span className='flex'>Donated:</span>
          <span className='flex items-center justify-center ml-1'><span className='text-xl md:text-2xl'>₹</span>{supporter.amount}</span>
        </div>
      </div>
      </div>
      <div className="flex justify-center text-center italic mt-2 text-sm md:text-base">"{supporter.message}"
      </div>
    </div>

    )
}

export default Supporter_cards