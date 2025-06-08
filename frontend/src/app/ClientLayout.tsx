'use client'

import { SessionProvider } from 'next-auth/react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function ClientLayout({
  children, // Pastikan children diterima sebagai prop
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex flex-1'>
          <Sidebar />
          <main className='flex-1 ml-0 md:ml-64 p-4'>
            {children} {/* Pastikan children di-render di sini */}
          </main>
        </div>
        <Footer />
      </div>
    </SessionProvider>
  )
}
