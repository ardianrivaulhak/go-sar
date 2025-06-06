'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FiLogIn, FiLogOut, FiUser } from 'react-icons/fi'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center'>
            <h1 className='text-xl font-bold text-gray-800'>
              E-Commerce Admin
            </h1>
          </div>
          <div className='flex items-center space-x-4'>
            {session ? (
              <>
                <Link
                  href='/profile'
                  className='flex items-center text-gray-700 hover:text-gray-900'>
                  <FiUser className='mr-1' />
                  {session.user?.name}
                </Link>
                <button
                  onClick={() => signOut()}
                  className='flex items-center text-gray-700 hover:text-gray-900'>
                  <FiLogOut className='mr-1' />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href='/auth/login'
                  className='flex items-center text-gray-700 hover:text-gray-900'>
                  <FiLogIn className='mr-1' />
                  Login
                </Link>
                <Link
                  href='/auth/register'
                  className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
