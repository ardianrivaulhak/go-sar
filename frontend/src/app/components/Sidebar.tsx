import Link from 'next/link'
import {
  FiHome,
  FiPieChart,
  FiSettings,
  FiShoppingBag,
  FiUsers,
} from 'react-icons/fi'

export default function Sidebar() {
  return (
    <div className='w-64 bg-gray-800 text-white fixed h-full'>
      <div className='p-4 border-b border-gray-700'>
        <h2 className='text-xl font-bold'>Admin Panel</h2>
      </div>
      <nav className='p-4'>
        <ul className='space-y-2'>
          <li>
            <Link
              href='/'
              className='flex items-center p-2 rounded hover:bg-gray-700'>
              <FiHome className='mr-3' />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href='/products'
              className='flex items-center p-2 rounded bg-gray-700'>
              <FiShoppingBag className='mr-3' />
              Products
            </Link>
          </li>
          <li>
            <Link
              href='/categories'
              className='flex items-center p-2 rounded hover:bg-gray-700'>
              <FiPieChart className='mr-3' />
              Categories
            </Link>
          </li>
          <li>
            <Link
              href='/users'
              className='flex items-center p-2 rounded hover:bg-gray-700'>
              <FiUsers className='mr-3' />
              Users
            </Link>
          </li>
          <li>
            <Link
              href='/settings'
              className='flex items-center p-2 rounded hover:bg-gray-700'>
              <FiSettings className='mr-3' />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
