import { Product, User } from './types'

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export async function fetchLogin(data: {
  email: string
  password: string
}): Promise<any> {
  const res = await fetch('http://localhost:9091/api/public/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Failder Login')
  }

  return res.json()
}

export async function fetchRegister(
  data: Omit<User, 'role'> & { role?: string }
): Promise<User> {
  const registerData = {
    ...data,
    role: data.role || 'user',
  }

  const res = await fetch('http://localhost:9091/api/public/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerData),
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(
      errorData.message || errorData.error || 'Registration failed'
    )
  }

  return await res.json()
}
