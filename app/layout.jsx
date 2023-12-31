import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* SearchBox */}
        <SearchBox />
        {children}
      </body>
    </html>
  )
}
