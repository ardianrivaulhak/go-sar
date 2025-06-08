'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  FiHome,
  FiMenu,
  FiPieChart,
  FiSettings,
  FiShoppingBag,
  FiUsers,
  FiX,
} from 'react-icons/fi'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        className='md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white'
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`w-64 bg-gray-800 text-white fixed h-full transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <div className='p-4 border-b border-gray-700'>
          <h2 className='text-xl font-bold'>Admin Panel</h2>
        </div>
        <nav className='p-4'>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/'
                className='flex items-center p-2 rounded hover:bg-gray-700'
                onClick={() => setIsOpen(false)}>
                <FiHome className='mr-3' />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href='/products'
                className='flex items-center p-2 rounded bg-gray-700'
                onClick={() => setIsOpen(false)}>
                <FiShoppingBag className='mr-3' />
                Products
              </Link>
            </li>
            <li>
              <Link
                href='/categories'
                className='flex items-center p-2 rounded hover:bg-gray-700'
                onClick={() => setIsOpen(false)}>
                <FiPieChart className='mr-3' />
                Categories
              </Link>
            </li>
            <li>
              <Link
                href='/users'
                className='flex items-center p-2 rounded hover:bg-gray-700'
                onClick={() => setIsOpen(false)}>
                <FiUsers className='mr-3' />
                Users
              </Link>
            </li>
            <li>
              <Link
                href='/settings'
                className='flex items-center p-2 rounded hover:bg-gray-700'
                onClick={() => setIsOpen(false)}>
                <FiSettings className='mr-3' />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
