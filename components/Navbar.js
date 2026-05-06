"use client";

import Logo from './Logo'
import Login from './Loginbtn'
import Logout from './Logoutbtn'

import { useContext, useEffect, useState } from "react";


import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useSession, } from "next-auth/react"


const Navbar = (props) => {
  const { data: session } = useSession()
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col md:flex-row z-10 mt-5 w-[95%] md:w-[85%] lg:w-[70%] gap-y-3 md:gap-y-0 md:h-25 md:bg-[#1B1107] md:border-2 md:border-[#FF7100] md:rounded-xl text-[#EFDFC4] relative">
        
        {/* First Nav Bar on Mobile (Logo & Hamburger) */}
        <div className="flex items-center justify-between md:justify-start w-full md:w-auto bg-[#1B1107] border-2 border-[#FF7100] md:border-0 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 md:py-0">
          <Logo animation_url={props.animation_url} textColor={props.textColor} logo_name={props.logo_name} />
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden text-[#EFDFC4] focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Second Nav Bar on Mobile (Links & Auth) */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full right-0 mt-2 md:mt-0 z-50 md:static md:flex flex-col md:flex-row items-center justify-start md:justify-end w-[50%] md:w-auto md:flex-1 bg-[#1B1107] border-2 border-[#FF7100] md:border-0 md:bg-transparent rounded-xl md:rounded-none px-4 py-4 md:py-0`}>
          
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto justify-center md:justify-end gap-4 lg:gap-7">
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-x-7 text-lg md:text-xl shrink-0 w-full md:w-auto text-center">

              <Link href="/" className="w-full md:w-auto">
                <li className={`px-4 md:px-5 p-2 md:p-3 hover:bg-[#c25c0ec8] rounded-xl ${(pathname === '/') ? 'bg-[#c25c0ec8]' : 'bg-transparent'} whitespace-nowrap`}>
                  <span> Home</span>
                </li>
              </Link>
              {session && (
                <Link href="/donate" className="w-full md:w-auto">
                  <li className={`px-4 md:px-5 p-2 md:p-3 hover:bg-[#c25c0ec8] rounded-xl ${(pathname === '/donate') ? 'bg-[#c25c0ec8]' : 'bg-transparent'} whitespace-nowrap`}>
                    <span>Donate</span>
                  </li>
                </Link>)
              }

              <Link href="/supporters" className="w-full md:w-auto">
                <li className={`px-4 md:px-5 p-2 md:p-3 hover:bg-[#c25c0ec8] rounded-xl ${(pathname === '/supporters') ? 'bg-[#c25c0ec8]' : 'bg-transparent'} whitespace-nowrap`}>
                  <span>Supporters</span>
                </li>
              </Link>

              {session && <>
                <Link href={`/${(session?.user?.name).replaceAll(" ", "")}`} className="w-full md:w-auto">
                  <li className={`px-4 md:px-5 p-2 md:p-3 hover:bg-[#c25c0ec8] rounded-xl ${(pathname === `/${(session?.user?.name).replaceAll(" ", "")}`) ? 'bg-[#c25c0ec8]' : 'bg-transparent'} whitespace-nowrap`}>
                    <span>Profile</span>
                  </li>
                </Link></>
              }

            </ul>

            <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t border-[#FF7100]/30 md:border-t-0">
              <ul className="flex justify-center gap-2 md:gap-4 whitespace-nowrap">
                {session ? <Logout /> : <Login />}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar