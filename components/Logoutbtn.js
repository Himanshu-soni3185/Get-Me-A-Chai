
import React from 'react'
import Link from 'next/link'
import { signOut } from "next-auth/react"


const Logoutbtn = () => {


    return (<>
        <Link href="/" onClick={() => {
            signOut();
        }}>
            <li className={`px-5 p-3 hover:bg-[#c25c0ec8] rounded-xl bg-transparent`}>
                <span>Logout</span>
            </li>
        </Link>
    </>
    )
}

export default Logoutbtn