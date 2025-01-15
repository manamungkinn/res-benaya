import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import ButonScrollTop from "@/components/ButtonScrollTop";
import Logo from "@/components/Navbar/logo";

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

export const metadata = {
  title: "RS Benaya",
  description: "Kalo sakit kesini aja wkwk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {<Toaster position="top-center" />}
        <Logo/>
        {<Navbar />}
        {children}
        {<Footer />}
        <div className="container">
        <div className="fixed bottom-5 right-5 z-50">{<ButonScrollTop />}</div>
        </div>
      </body>
    </html>
  );
}
