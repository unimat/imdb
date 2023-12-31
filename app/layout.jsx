import { Inter } from 'next/font/google'
import Providers from './Providers';
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
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
