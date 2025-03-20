import { Geist, Geist_Mono } from "next/font/google";
import FloatingNav from "./components/Header/FloatingNav";
import Header from "./components/Header/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Glow Nest",
  description: "The best skincare products for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased leading-7 tracking-wider transition-colors duration-200`}
      >
        <Header />
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
