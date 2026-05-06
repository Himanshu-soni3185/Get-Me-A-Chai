
import React from 'react'


const Paymenttypecard = ({ paymentType , setstate, state }) => {
  return (
    <button onClick={()=>{ setstate(paymentType); }} className={`border-2 rounded-3xl p-2 px-4 text-xl ${state === paymentType ? 'bg-[#C25B0E] text-[#EFDFC4]' : 'border-[#C25B0E] text-[#C25B0E]'}`}>
      {paymentType}
    </button>
  )
}

export default Paymenttypecard