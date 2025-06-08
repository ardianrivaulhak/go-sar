'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { fetchRegister } from '../../lib/api'

export default function RegisterPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  })

  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await fetchRegister(formData)

      alert('Successfully Register')
      router.push('/auth/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            alt='Your Company'
            src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
            className='mx-auto h-10 w-auto'
          />
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Register your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            action='#'
            method='POST'
            className='space-y-6'
            onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='username'
                className='block text-sm/6 font-medium text-gray-900'>
                Username
              </label>
              <div className='mt-2'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  value={formData.username}
                  onChange={handleChange}
                  required
                  autoComplete='username'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm/6 font-medium text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete='email'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm/6 font-medium text-gray-900'>
                Password
              </label>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete='new-password'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className='block text-sm/6 font-medium text-gray-900'>
                Account Type
              </label>
              <div className='mt-2 space-y-2'>
                <div className='flex items-center'>
                  <input
                    id='role-user'
                    name='role'
                    type='radio'
                    value='user'
                    checked={formData.role === 'user'}
                    onChange={handleChange}
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='role-user'
                    className='ml-2 block text-sm text-gray-700'>
                    Regular User
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    id='role-admin'
                    name='role'
                    type='radio'
                    value='admin'
                    checked={formData.role === 'admin'}
                    onChange={handleChange}
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='role-admin'
                    className='ml-2 block text-sm text-gray-700'>
                    Administrator
                  </label>
                </div>
              </div>
            </div>

            {error && <p className='text-sm text-red-500'>⚠️ {error}</p>}

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Register
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            Already have an account?{' '}
            <Link
              href='/auth/login'
              className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
