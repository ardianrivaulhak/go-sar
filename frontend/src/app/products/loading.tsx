import { Skeleton } from '../components/ui/Skeleton'

export default function Loading() {
  return (
    <div className='ml-64 p-8'>
      <div className='mb-6'>
        <Skeleton className='h-8 w-48 mb-4' />
        <Skeleton className='h-4 w-64' />
      </div>

      <div className='space-y-4'>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='flex items-center space-x-4'>
            <Skeleton className='h-12 w-12 rounded-md' />
            <div className='space-y-2 flex-1'>
              <Skeleton className='h-4 w-3/4' />
              <Skeleton className='h-4 w-1/2' />
            </div>
            <Skeleton className='h-4 w-16' />
          </div>
        ))}
      </div>
    </div>
  )
}
