import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CartIconProps {
  count: number
}

export function CartIcon({ count }: CartIconProps) {
  return (
    <div className="relative cursor-pointer">
      <ShoppingCart className="w-6 h-6" />

      {count > 0 && (
        <Badge className="absolute -top-2 -right-2  h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs" variant="destructive" >
          {count}
        </Badge>
      )}
    </div>
  )
}