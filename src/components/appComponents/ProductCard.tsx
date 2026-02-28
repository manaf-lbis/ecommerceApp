import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Product } from "@/Types/Product"

interface ProductCardProps {
  product: Product
  isCart?: boolean
  quantity?: number
  onAddToCart?: (product: Product) => void
  onIncrement?: (id: number) => void
  onDecrement?: (id: number) => void
  onRemove?: (id: number) => void
}

export function ProductCard({
  product,
  isCart = false,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement,
  onRemove,
}: ProductCardProps) {
  if (!product || !product.price) return null;

  const discountedPrice =
    product.price - (product.price * (product.discountPercentage || 0)) / 100

  const imageUrl = product?.images?.[0] || "/placeholder.png"

  if (isCart) {
    return (
      <Card className="flex flex-row items-center gap-4 p-4 mb-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded bg-gray-100">
          <img
            src={imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <h2 className="font-semibold text-sm sm:text-base line-clamp-1">
            {product.title}
          </h2>

          <p className="text-xs text-muted-foreground line-clamp-1">
            {product.description}
          </p>

          <div className="flex items-center gap-2 py-1">
            <span className="font-bold text-sm">
              ₹{discountedPrice.toFixed(2)}
            </span>
            <span className="text-xs line-through text-muted-foreground">
              ₹{product.price}
            </span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <div className="flex items-center border rounded-md">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => onDecrement?.(product.id)}
                disabled={quantity === 1}
              >
                -
              </Button>
              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => onIncrement?.(product.id)}
              >
                +
              </Button>
            </div>

            <Button
              size="sm"
              variant="destructive"
              className="ml-auto h-8 text-xs"
              onClick={() => onRemove?.(product.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden transition hover:shadow-xl">
      <div className="h-52 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={product.title}
          className="h-full w-full object-cover transition hover:scale-105"
        />
      </div>

      <CardContent className="flex-1 p-4 space-y-3">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-base font-semibold line-clamp-1">
            {product.title}
          </h2>
          {product.brand && (
            <Badge variant="secondary" className="text-xs shrink-0">
              {product.brand}
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">
            ₹{discountedPrice.toFixed(2)}
          </span>
          <span className="text-sm line-through text-muted-foreground">
            ₹{product.price}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => onAddToCart?.(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}