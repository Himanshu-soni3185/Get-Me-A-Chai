
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const Loginbtn = () => {
    const pathname = usePathname();
    return (<>
        <Link href="/login">
            <li className={`px-5 p-3 hover:bg-[#c25c0ec8] rounded-xl ${(pathname === '/login') ? 'bg-[#c25c0ec8]' : 'bg-transparent'} `}>
                <span>Login</span>
            </li>
        </Link>
    </>
    )
}

export default Loginbtn