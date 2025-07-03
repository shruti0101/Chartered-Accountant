// app/layout.tsx or layout.js
import { Inter } from 'next/font/google'; // Replace this with your font
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer/Footer"
import Aos from '@/components/AOS/Aos';

// Load the font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>

        <Aos />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
