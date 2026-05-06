import React from "react";
import Supporter_cards from "@/components/Supporter_cards";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import connectDB from "@/db/connectDb";
import Payment from "@/models/Payment";

const Page = async () => {
  await connectDB();

  const supporters = await Payment.find({ done: true })
    .sort({ createdAt: -1 })
    .lean();

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
            {
            supporters.length > 0 ? (
              supporters.map((supporter, index) => (
                <Supporter_cards key={index} supporter={supporter} />
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