import { Product } from '../lib/types'

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr className='bg-gray-200 text-gray-700'>
            <th className='py-3 px-4 text-left'>ID</th>
            <th className='py-3 px-4 text-left'>Product</th>
            <th className='py-3 px-4 text-left'>Category</th>
            <th className='py-3 px-4 text-left'>Price</th>
            <th className='py-3 px-4 text-left'>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr
              key={product.id}
              className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='py-3 px-4'>{product.id}</td>
              <td className='py-3 px-4 flex items-center'>
                <div>
                  <p className='font-medium'>{product.title}</p>
                  <p className='text-sm text-gray-500 line-clamp-1'>
                    {product.description}
                  </p>
                </div>
              </td>
              <td className='py-3 px-4 capitalize'>{product.category}</td>
              <td className='py-3 px-4'>${product.price.toFixed(2)}</td>
              <td className='py-3 px-4'>
                <span className='bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs'>
                  {product.rating.rate} ★ ({product.rating.count})
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
