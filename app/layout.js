"use client"
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/Login", "/Signup", "/Marketplace"];
  const backgroundColors = {
    '/': 'bg-bg1',
    '/Instagram': 'bg-bg13',
    '/Tiktok': 'bg-customSapphire',
    '/Twitter': 'bg-bg13',
    '/Linkedln': 'bg-bg13',
  };
  const pageBgClass = backgroundColors[pathname];
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <div className={`${pageBgClass}`}>
            {!noNavbarRoutes.includes(pathname) && <Navbar />}
            {children}
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
