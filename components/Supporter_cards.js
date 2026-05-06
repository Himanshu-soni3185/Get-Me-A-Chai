"use client"
import React, { useState } from 'react'


const Supporter_cards = ({supporter}) => {
    const [expanded, setExpanded] = useState(false);

    return (

    <div 
      onClick={() => setExpanded(!expanded)}
      className={`flex flex-col justify-between rounded-2xl w-full sm:w-85 p-4 py-4 bg-[#EFDFC4] cursor-pointer transition-all duration-300 ease-in-out ${expanded ? 'max-h-[500px]' : 'max-h-44'} overflow-hidden group hover:shadow-lg hover:shadow-[#00000030] hover:scale-[1.02]`}
    >
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

      {/* Message - truncated by default, full on click */}
      <div className={`flex flex-col items-center mt-2 text-sm md:text-base transition-all duration-300`}>
        <p className={`text-center italic text-[#3d2316] ${expanded ? '' : 'line-clamp-2'}`}>
          &quot;{supporter.message}&quot;
        </p>
        {!expanded && supporter.message && supporter.message.length > 60 && (
          <span className='text-xs text-[#C25B0E] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            tap to read more
          </span>
        )}
        {expanded && (
          <span className='text-xs text-[#C25B0E] mt-1'>
            tap to collapse
          </span>
        )}
      </div>
    </div>

    )
}

export default Supporter_cards