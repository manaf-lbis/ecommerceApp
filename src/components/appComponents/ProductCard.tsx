import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import type { Product } from "@/Types/Product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100

  const imageUrl =
    product.images?.[0] || product.image || "/placeholder.png"

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">

      <div className="h-52 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <CardContent className="flex-1 p-4 space-y-3">

        <div className="flex justify-between items-start gap-2">
          <h2 className="text-base font-semibold line-clamp-1">
            {product.title}
          </h2>
          {product.brand && (
            <Badge variant="secondary" className="text-xs">
              {product.brand}
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-lg font-semibold">
            ₹{discountedPrice.toFixed(2)}
          </span>

          <span className="text-sm line-through text-muted-foreground">
            ₹{product.price}
          </span>

          <Badge variant="destructive" className="text-xs">
            {product.discountPercentage}% OFF
          </Badge>
        </div>

        <p className="text-sm text-yellow-500 font-medium">
          ⭐ {product.rating}
        </p>

      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          Add to Cart
        </Button>
      </CardFooter>

    </Card>
  )
}