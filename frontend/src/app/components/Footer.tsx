import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p>
              &copy; {new Date().getFullYear()} E-Commerce Admin. All rights
              reserved.
            </p>
          </div>
          <div className='flex space-x-6'>
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
