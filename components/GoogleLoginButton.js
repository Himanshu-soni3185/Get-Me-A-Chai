"use client";


import React from "react";

import { useSession, signIn, signOut } from "next-auth/react"

const GoogleLoginButton = () => {
 

  return (
    <button onClick={()=>signIn('google')}
      className="button-hover-active w-65 bg-[#EFDFC4] p-3 px-5 text-black font-bold flex justify-evenly items-center gap-2 rounded-2xl"
    >
      <img src="/google-icon.png" alt="Google logo" />
      <span>Login with Google</span>
    </button>
  );
};

export default GoogleLoginButton;