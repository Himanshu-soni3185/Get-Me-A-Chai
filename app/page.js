"use client"

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Creatercard from "@/components/Creatercard";

export default function Home() {

  return (<>

    <div className="main flex border-white flex-col font-sans bg-[#23170b] items-center select-none">

      <Navbar logo_name="GetMeAChai" animation_url="/Coffeelove.mp4" textColor="#C25B0E" />


      <div className="content flex flex-col justify-center w-full items-center">

        <div className="flex flex-col-reverse md:flex-row justify-evenly md:max-w-400 mt-10 md:mt-30 min-h-[70vh] w-full px-4 md:px-0 gap-y-10 md:gap-y-0">

          <div className="flex flex-col w-full md:w-[50%] p-2 md:p-5 gap-y-5 md:gap-y-7 items-center md:items-start text-center md:text-left">
            <h1 className="text-[#EFDFC4] text-4xl md:text-5xl font-black font-serif leading-tight">
              Get Me A <span className="text-[#FF7100]">Chai</span>
            </h1>
            <h3 className="text-3xl text-gray-300">Support my work — Buy me a chai!</h3>
            <p className="text-2xl text-gray-300 font-light">
              I'm a passionate creator who builds things with love. Your support fuels my creativity and keeps the chai flowing. Every cup counts! 🫖
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center md:justify-start w-full items-center">
              <a href="/donate" className="w-full sm:w-auto flex justify-center">
                <Button icon="/chai-icon.png" text="Buy Me a Chai" textColor="#1B1107" bgColor="#EFDFC4" className="button-hover-active justify-center w-full sm:w-64" />
              </a>
              <a href="/supporters" className="w-full sm:w-auto flex justify-center">
                <Button icon="/heart-icon.png" text="View Supporters" textColor="#1B1107" bgColor="#EFDFC4" className="button-hover-active justify-center w-full sm:w-64" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-[35%] max-w-300 flex justify-center items-center mt-10 md:mt-0"> 
            <div className='w-48 md:w-auto'>
              <img className="object-contain w-full" src="/teacup-img.png" alt="Chai Cup" />
            </div>

          </div>
        </div>

        <div className="glass-card p-6 md:p-10 w-[95%] md:w-full flex flex-col gap-y-6 md:gap-y-8 justify-center items-center my-10 md:my-0">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#FF7100] text-center">What People Say 💬</h2>
          <div className="w-full max-w-4xl">
            <Carousel />
          </div>
        </div >

        <div className="w-[95%] md:w-full max-w-3xl mb-10 md:mb-0">
          <div className="glass-card p-6 md:p-8">
            <Creatercard creatername="The Creator" desc="Developer · Designer · Chai Lover" text="Hey there! I'm a passionate developer who builds open-source tools, writes tutorials, and shares knowledge with the community. Your chai fuels my late-night coding sessions and keeps the creativity flowing! ☕✨" />
          </div>
        </div>


      </div>

      <Footer animation_url="/FooterCoffeelove.mp4" />
    </div>

  </>
  );
}




