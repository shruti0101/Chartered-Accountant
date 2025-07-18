// app/layout.tsx or layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer/Footer";
import { Toaster } from 'react-hot-toast'; // ✅ Add this import

// Load the font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Toaster position="top-right" reverseOrder={false} /> {/* ✅ This works now */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
