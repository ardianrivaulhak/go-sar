// 'use client'

import ProductTable from '../components/ProductTable'
import { fetchProducts } from '../lib/api'

export default async function ProductsPage() {
  const products = await fetchProducts()

  return (
    <div>
      <h1 className='text-2xl font-bold mb-2'>Product Management</h1>
      <p className='text-gray-600 mb-6'>Manage your product inventory</p>
      <ProductTable products={products} />
    </div>
  )
}
