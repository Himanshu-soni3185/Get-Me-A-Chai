"use client";

import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";

import Navbar from '@/components/Navbar'
import Pricecard from '@/components/Pricecard'
import Paymenttypecard from '@/components/Paymenttypecard';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { initiate_payment } from "@/actions/useractions";

const DonateClient = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [paymentMethod, setPaymentMethod] = useState("UPI");
    const [treat, setTreat] = useState({ teaname: "", price: "" });
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    const pay = async (data) => {
        let a = await initiate_payment(data.price, data.name, data);
        const orderId = a.id
        var options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: data.price * 100,   // FIXED
            currency: "INR",
            name: "Get Me A Chai",
            description: "Test Transaction",
            image: `/chai-logo.png`,
            order_id: orderId,
            callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/razorpay`,

            prefill: {
                name: session?.user?.name || "Test User",
                email: "test@example.com",
                contact: "9876543210"
            },

            theme: {
                color: "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    const priceData = [
        {
            teaname: "Chai",
            about: "A comforting cup of chai.",
            price: "20",
            image: "/chai.png"
        },
        {
            teaname: "Matcha Latte",
            about: "A creamy blend of matcha and milk.",
            price: "50",
            image: "/latte-icon.png"
        },
        {
            teaname: "Cappuchino",
            about: "A rich and frothy cappuccino.",
            price: "120",
            image: "/Cappuchino-icon.png"
        }
    ];

    const { userData, setUserData } = useContext(UserContext);

    const handleDonate = () => {
        if (
            treat.teaname === "" ||
            !treat.price ||
            paymentMethod === "" ||
            message.trim() === "" ||
            treat.image === ""
        ) {
            alert("Please select a treat and enter a message before donating!");
            return;
        }

        const updatedUserData = {
            ...userData,
            name: session.user.name,
            treat: treat.teaname,
            price: treat.price,
            img: treat.image,
            paymentMethod,
            message: message.trim()
        };

        setUserData(prev => ({
            ...prev,
            ...updatedUserData
        }));

        console.log(updatedUserData);
        pay(updatedUserData);

    };


    return (
        <>


            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>




            <div className="flex flex-col min-h-screen bg-[#EFDFC4] select-none">
                <div className="flex-1 flex flex-col gap-3">
                <div className='flex justify-center'>
                    <Navbar logo_name="GetMeAChai" animation_url="/Coffeelove.mp4" textColor="#C25B0E" />
                </div>

                <div className='my-5 md:my-10 title flex-col flex justify-center items-center w-[95%] md:w-[75%] self-center text-center'>

                    <span className='text-4xl md:text-5xl text-[#593726] font-bold'>Buy A Chai</span> <div><img className='w-16 md:w-20' src="/chai-icon.png" alt="Chai Icon" /> </div>
                    <div className='text-2xl md:text-3xl text-[#C25B0E] place-self-center md:place-self-start mt-2'>Select a treat to fuel my next creation!</div>
                </div>

                <div className='flex flex-wrap justify-center gap-4 mb-10 w-full px-2'>
                    {priceData.map((item, index) => (
                        <Pricecard key={index} teaname={item.teaname} about={item.about} price={item.price} image={item.image} state={treat} setstate={setTreat} />
                    ))}
                </div>

                <div className="payment-container w-full px-2 md:px-0">

                    <div className="payment-method flex flex-col md:flex-row gap-2 justify-center items-center">
                        <span className='text-2xl md:text-3xl text-[#0a0a098f] cursor-none'>Pay with :</span>
                        <div className='flex flex-wrap justify-center p-2 md:p-3 md:px-6 gap-2 md:gap-3 md:gap-x-7 font-bold text-xl md:text-2xl text-[#C25B0E]'>
                            <Paymenttypecard paymentType="UPI" state={paymentMethod} setstate={setPaymentMethod} />
                        </div>
                    </div>

                    <div className='flex flex-col w-[90%] md:w-[50%] place-self-center text-lg md:text-xl font-bold gap-2 mt-4'>
                        <span></span>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className='w-full p-3 py-5 rounded-4xl border-2 border-[#C25B0E] focus:outline-none focus:ring-2 focus:ring-[#C25B0E] focus:border-transparent'
                            placeholder='Your message...'
                            rows={3}
                        />
                    </div>

                    <div className='place-self-center mt-6 mb-6 w-[80%] md:w-auto flex justify-center'>
                        <Button
                            text="Donate Now"
                            className="w-full md:w-[30vw] p-3 my-7 rounded-3xl justify-center items-center"
                            icon="/donate-icon.png"
                            iconClassName="rotate-y-180 w-6 md:w-7 "
                            bgColor="#C25B0E"
                            textColor="#EFDFC4"
                            padding="p-3 px-6"
                            fontSize="text-2xl"
                            onClick={handleDonate}
                        />
                    </div>
                </div>

                </div>
                <div className="mt-auto">
                    <Footer bgColor="#1B1107" animation_url="/Coffeelove.mp4" textColor="#EFDFC4" />
                </div>
            </div>
        </>
    );
};

export default DonateClient;