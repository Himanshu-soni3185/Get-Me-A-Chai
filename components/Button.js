"use client";
import React from 'react'

const Button = (props) => {
    return (

        <button  onClick={props.onClick || null} className={`button-hover-active flex text-[${props.textColor}] bg-[${props.bgColor}]  ${props.className &&  "gap-2"} border-3 border-[#FF7100] cursor-pointer items-center px-7 p-2 active:translate-y-1 transition-all duration-200 rounded-2xl`}>
            <div className='w-14 items-center overflow-hidden'>
                <img className={`object-contain ${props.iconClassName || ""}`} src={props.icon} alt=" " />
                </div>
            <div className='text-2xl font-bold'>{props.text}</div>
        </button>

    )
}

export default Button