import { ProductCard } from '@/components/appComponents/ProductCard'
import { useGetProductsQuery } from '@/services/productApi'
import Shimmer from '@/components/appComponents/Shimmer'

const HomePage = () => {
  const { data, isLoading, isError } = useGetProductsQuery({
    limit: 12,
    skip: 0,
  })

  if (isLoading) {
    return <Shimmer />
  }

  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-lg">
        Something went wrong. Please try again.
      </div>
    )
  }

  if (!data?.products?.length) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 text-lg">
        No products available.
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Latest Products
      </h1>


      <div className="grid gap-6 grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4">
        {data.products.map((product :any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomePage