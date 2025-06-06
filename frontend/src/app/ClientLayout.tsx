'use client'

import { SessionProvider } from 'next-auth/react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-8 ml-64'>{children}</main>
      </div>
      <Footer />
    </SessionProvider>
  )
}
