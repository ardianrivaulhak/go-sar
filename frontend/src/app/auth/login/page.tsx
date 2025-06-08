'use client'

import { setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { fetchLogin } from '../../lib/api'

export default function LoginPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const user = await fetchLogin(formData)

      if (user.token) {
        setCookie('token', user.token, {
          path: '/',
          maxAge: 60 * 60 * 24,
        })
      }

      alert('Login berhasil')
      console.log('Login berhasil, redirecting...')
      router.push('/')
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
            Sign in to your account
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
                  autoComplete='current-password'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            {error && <p className='text-sm text-red-500'>⚠️ {error}</p>}

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            Dont have an account?{' '}
            <Link
              href='/auth/register'
              className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Register in here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
