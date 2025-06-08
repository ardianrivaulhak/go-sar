'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiLogIn, FiLogOut, FiUser } from 'react-icons/fi'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ name?: string; email?: string }>({})

  useEffect(() => {
    const token = Cookies.get('token')
    const userData = Cookies.get('user') // Optional: jika user info disimpan di cookie

    if (token) {
      setIsLoggedIn(true)

      if (userData) {
        try {
          setUser(JSON.parse(userData))
        } catch {
          setUser({})
        }
      }
    }
  }, [])

  const handleLogout = () => {
    if (window.confirm('Yakin ingin logout?')) {
      Cookies.remove('token')
      Cookies.remove('user')
      window.location.href = '/auth/login'
    }
  }

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center'>
            <h1 className='text-xl font-bold text-gray-800'>
              E-Commerce Admin
            </h1>
          </div>
          <div className='flex items-center space-x-4'>
            {isLoggedIn ? (
              <>
                <Link
                  href='/profile'
                  className='hidden md:flex items-center text-gray-700 hover:text-gray-900'>
                  <FiUser className='mr-1' />
                  <span className='hidden sm:inline'>
                    {user?.name || 'User'}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className='flex items-center text-gray-700 hover:text-gray-900'>
                  <FiLogOut className='mr-1' />
                  <span className='hidden sm:inline'>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href='/auth/login'
                  className='flex items-center text-gray-700 hover:text-gray-900'>
                  <FiLogIn className='mr-1' />
                  <span className='hidden sm:inline'>Login</span>
                </Link>
                <Link
                  href='/auth/register'
                  className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm sm:text-base'>
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
