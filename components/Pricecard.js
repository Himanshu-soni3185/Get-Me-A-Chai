import React from 'react'

const Pricecard = (props) => {
  return (
    <div onClick={()=>{props.setstate({teaname: props.teaname, price: props.price,image: props.image});}} className={`hover:scale-105 md:hover:scale-110 transition-all duration-200 mx-2 md:mx-5 flex flex-col p-4 md:p-5 px-6 md:px-10 py-5 md:py-7 rounded-2xl text-[#EFDFC4] bg-[#1B1107] border-2 border-[#C25B0E] gap-3 justify-center items-center cursor-pointer ${props.state.teaname === props.teaname ? 'border-[#9E4C0D] scale-105 md:scale-110' : ''} w-full sm:w-auto`}>  
      <div className='flex flex-col justify-center items-center gap-2 md:gap-3 gap-y-1 w-full'>

        <div className='flex justify-center w-24 md:w-40 items-center overflow-hidden'>
          <img className='w-32 md:w-60 object-contain' src={props.image} alt={props.teaname} />
        </div>
        <span className='text-xl md:text-3xl text-[#EFDFC4] bg-[#9E4C0D] p-1 md:p-2 px-3 md:px-5 rounded-xl'>{props.teaname}</span>

      </div>

      <div className='flex flex-col justify-center items-center text-lg md:text-2xl w-full'>

        <div className='flex p-2 md:p-3 w-full max-w-[15rem] md:w-64 text-center justify-center'><span >{props.about}</span></div>
        <div className='flex justify-center p-1 items-center px-4 text-2xl md:text-4xl bg-[#9E4C0D] rounded-xl '>
          <span className='text-3xl md:text-5xl text-amber-50 self-center'>₹</span><span className='place-self-start'>{props.price}</span>
        </div>

      </div>

    

    </div>
  )
}

export default Pricecard