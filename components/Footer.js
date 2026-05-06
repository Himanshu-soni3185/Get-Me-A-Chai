import React from 'react'
import Logo from './Logo'
const Footer = (props) => {
    return (
        <div className={`bg-[${props.bgColor || '#C25B0E'}] h-50 p-3 w-full text-[${props.textColor || '#1D1105'}] text-lg font-serif flex justify-center items-center `}>
            <div className='flex flex-col  items-center'>
                <div className='h-20'><Logo logo_name="GetMeAChai" animation_url={props.animation_url} textColor={props.textColor || "#1D1105"} /></div>
                <p>&copy; 2026 Get Me A Chai. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer