"use client"

import React from 'react'
import { useEffect } from 'react';
import GoogleLoginButton from "@/components/GoogleLoginButton";
import GithubLoginButton from "@/components/GithubLoginButton";
import Navbar from '@/components/Navbar'

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

const LoginClient = () => {

const { data: session } = useSession()
const router = useRouter()
useEffect(()=>{
  if (session) {
    router.push(`/${(session?.user?.name).replaceAll(" ","")}`)
  }
},[session])
 

  return (<>
    <div className="flex flex-col gap-y-16 min-h-screen bg-[#1B1107] items-center select-none pb-20">
      <Navbar logo_name="GetMeAChai" animation_url="/Coffeelove.mp4" textColor="#E8D5BE" />

      <div className="flex-1 flex flex-col justify-center items-center w-full max-w-lg px-8">
        <div className="glass-card w-full p-12 flex flex-col items-center gap-10 shadow-2xl">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold font-serif text-[#EFDFC4]">Welcome Back</h1>
            <p className="text-gray-400 text-lg">Login to support your favorite creators ☕</p>
          </div>

          <div className="flex flex-col gap-y-8 w-full">
            <div className="hover:scale-105 transition-transform duration-200 w-full flex justify-center">
              <GoogleLoginButton />
            </div>
            <div className="hover:scale-105 transition-transform duration-200 w-full flex justify-center">
              <GithubLoginButton />
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center px-4">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  </>
  )

}

export default LoginClient


