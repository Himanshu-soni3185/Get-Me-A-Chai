import React from 'react'

const Logo = (props) => {
  return (
    <div className="flex justify-start items-center h-full overflow-hidden select-none gap-2" >
            <div className=" relative w-16 h-25 flex items-center justify-center overflow-hidden rounded-full ">
                <video className="object-cover w-full h-full -top-[11%] absolute items-center" src={props.animation_url} autoPlay loop muted playsInline />
            </div>
            <div className={`text-2xl font-bold font-serif`} style={{ color: props.textColor }}>{props.logo_name}</div>
          </div>
  )
}

export default Logo