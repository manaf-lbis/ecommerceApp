import  { useState } from 'react'
import { ProductCard } from '@/components/appComponents/ProductCard'
import { useGetProductsQuery } from '@/services/productApi'
import Shimmer from '@/components/appComponents/Shimmer'
import { addProduct } from '../cart/cartSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { AppPagination } from '@/components/appComponents/AppPagination'

const HomePage = () => {
  const dispatch = useDispatch()
  
  const [page, setPage] = useState(1)
  const limit = 12
  
  const { data, isFetching, isError } = useGetProductsQuery({
    limit,
    skip: (page - 1) * limit,
  })

  const totalPages = data ? Math.ceil(data.total / limit) : 0

  if (isFetching) return <Shimmer />
  if (isError) return <div className="p-10 text-center text-red-500">Error loading products.</div>

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Latest Products</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products.map((product: any) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={(p) => {
              dispatch(addProduct(p))
              toast.success('Added to cart')
            }} 
          />
        ))}
      </div>

      <AppPagination 
        currentPage={page} 
        totalPages={totalPages} 
        onPageChange={(newPage) => setPage(newPage)} 
      />
    </div>
  )
}

export default HomePage