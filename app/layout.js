

import "./globals.css";

import SessionWrapper from "@/components/SessionWrapper";
import UserContextProvider from "@/context/UserContext";

export const metadata = {
  title: "GetMeAChai | Support my work",
  description: "Get Me A Chai is a platform that allows you to support my work by buying me a chai! Your support helps me continue creating content and sharing knowledge with the community. Every cup counts! 🫖",
};

export const favicon = "/favicon.ico";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        <SessionWrapper>
          <UserContextProvider>
            {children}
          </UserContextProvider>
        </SessionWrapper>

      </body>
    </html>
  );
}
