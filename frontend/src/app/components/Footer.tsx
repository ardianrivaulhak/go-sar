import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          {/* Kiri: Copyright */}
          <div className='text-center md:text-left'>
            <p>
              &copy; {new Date().getFullYear()} E-Commerce Admin. All rights
              reserved.
            </p>
          </div>

          {/* Kanan: Links */}
          <div className='flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-center'>
            <Link href='/privacy' className='hover:text-gray-300'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-gray-300'>
              Terms of Service
            </Link>
            <Link href='/contact' className='hover:text-gray-300'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
