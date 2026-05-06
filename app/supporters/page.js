"use client";
import React, { useState, useEffect } from "react";
import Supporter_cards from "@/components/Supporter_cards";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const POLL_INTERVAL = 30000; // Refresh every 30 seconds

const Page = () => {
  const [supporters, setSupporters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSupporters = async () => {
    try {
      const res = await fetch("/api/payments");
      const data = await res.json();
      if (Array.isArray(data)) {
        setSupporters(data);
      }
    } catch (err) {
      console.error("Failed to fetch supporters:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupporters();

    const interval = setInterval(fetchSupporters, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main min-h-screen flex flex-col items-center bg-[#593726]">
        <Navbar
          logo_name="GetMeAChai"
          animation_url="/Coffeelove.mp4"
          textColor="#C25B0E"
        />

        <div className="content my-10 flex flex-col items-center">
          <div className="flex flex-col p-5 gap-2 text-center items-center">
            <div className="italic text-[#EFDFC4] text-5xl font-black font-serif">
              <span className="text-5xl">#</span>
              <span className="text-4xl text-[#FF7100]">Chai Supporters</span>
              <span className="text-3xl">❤️</span>
            </div>
            <span className="text-[#EFDFC4]">
              Thank you to everyone who has supported this journey!
            </span>
          </div>

          <div className="flex flex-wrap gap-5 p-5 mt-7 justify-center m-5">
            {loading ? (
              <div className="flex flex-col items-center gap-3 py-10">
                <div className="w-10 h-10 border-4 border-[#EFDFC4] border-t-[#FF7100] rounded-full animate-spin"></div>
                <span className="text-[#EFDFC4] text-lg">Loading supporters...</span>
              </div>
            ) : supporters.length > 0 ? (
              supporters.map((supporter, index) => (
                <Supporter_cards key={supporter._id || index} supporter={supporter} />
              ))
            ) : (
              <span className="text-[#EFDFC4] text-xl">(No supporters yet!)</span>
            )}
          </div>
        </div>
      </div>

      <Footer animation_url="/FooterCoffeelove.mp4" />
    </>
  );
};

export default Page;