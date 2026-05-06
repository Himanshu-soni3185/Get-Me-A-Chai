"use client";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { userData, setUserData } = useContext(UserContext);

  const [data, setData] = useState({
    name: "",
    image: "",
    email: "",
  });

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("6527 6589 0000 1005");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Redirect only after session check completes
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Update local state + context only when session exists
  useEffect(() => {
    if (session?.user) {
      const userInfo = {
        name: session.user.name || "",
        image: session.user.image || "",
        email: session.user.email || "",
      };
      setData(userInfo);
    }
  }, [session]);

  return (
    <>
      <div className="flex flex-col  min-h-screen bg-[#EFDFC4] text-[#F4EBDC] select-none">
        <div className="min-h-100">
          <div className="relative flex justify-center">
            <Navbar
              logo_name="GetMeAChai"
              animation_url="/Coffeelove.mp4"
              textColor="#C25B0E"
            />

            <div className="absolute z-0 cover-video w-full">
              <video
                className="object-cover w-full h-100"
                src="/cover-video.mp4"
                muted

              />

              {data.image && (
                <div className="absolute -bottom-16 md:-bottom-20 border-7 border-[#EFDFC4] left-1/2 -translate-x-1/2 flex justify-center items-center overflow-hidden w-32 h-32 md:w-40 md:h-40 rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src={data.image.replace("96", "200")}
                    alt="profile"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center py-10 px-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-serif text-[#C25B0E]">
              Welcome, {data.name}
            </h1>
            <p className="text-[#1B1107] mt-2">
              Thanks for visiting our website.
            </p>
          </div>
        </div>

        {/* Credential Card */}
        <div className="w-full max-w-2xl px-4 mx-auto mb-20 text-[#1B1107]">

          <div className="bg-white/75 backdrop-blur-xl border border-[#1b110720] shadow-xl rounded-3xl p-6 md:p-8 space-y-4 md:space-y-6 text-center">

            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Payment Test Credentials
              </h2>

              <p className="text-sm text-[#1b1107a6]">
                Sandbox environment — use dummy data only
              </p>

              {/* TEST BADGE */}
              <span className="inline-flex items-center gap-1 mt-2 text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-300">
                ⚠️ TEST MODE
              </span>
            </div>

            {/* Warning Box */}
            <div className="text-sm text-center text-[#1b1107a6] bg-[#EFDFC4] p-3 rounded-xl border border-[#1b110710] leading-relaxed">
              These credentials are for testing purposes only. Do not use real payment information.
            </div>

            {/* Card Number */}
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#1b1107a6]">Card Number</span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl select-text font-medium tracking-[0.25em]">
                  6527 6589 0000 1005
                </span>
                <button
                  onClick={handleCopy}
                  className={`p-1.5 rounded-md transition-all active:scale-95 ${
                    isCopied
                      ? "text-green-600 bg-green-100 hover:bg-green-200"
                      : "text-[#1b1107a6] hover:text-[#C25B0E] hover:bg-[#EFDFC4]"
                  }`}
                  title="Copy Card Number"
                >
                  {isCopied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Expiry + CVV */}
            <div className="grid grid-cols-2 gap-6">

              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#1b1107a6]">Expiry Date</span>
                <span className="text-lg font-medium">
                  (MM/YY) any future date
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#1b1107a6]">CVV</span>
                <span className="text-lg font-medium">
                  Any 3-digit number
                </span>
              </div>

            </div>

            {/* OTP */}
            <div className="pt-4 border-t border-[#1b110710] flex flex-col gap-1">
              <span className="text-sm text-[#1b1107a6]">OTP</span>
              <span className="text-lg font-medium tracking-wide">
                Any 6-digit number
              </span>
            </div>

          </div>
        </div>

      </div>

      <Footer
        bgColor="#1B1107"
        animation_url="/Coffeelove.mp4"
        textColor="#EFDFC4"
      />
    </>
  );
};

export default ProfilePage;