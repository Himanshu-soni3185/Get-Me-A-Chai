"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"

const GithubLoginButton = () => {
 
 
    return (
      <button
        onClick={(e) =>{
          e.preventDefault()
          signIn('github')}}
        className="button-hover-active w-65 font-bold bg-[#EFDFC4] p-3 px-5 text-black flex justify-evenly items-center gap-2 rounded-2xl"
      >
        <img src="/github-icon.png" alt="GitHub" />
        <span>Login with GitHub</span>
      </button>
    );
  
};

export default GithubLoginButton;