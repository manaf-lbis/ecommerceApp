import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"

interface CartIconProps {
  count: number
}

export function CartIcon({ count }: CartIconProps) {
  const navigate = useNavigate()
  return (
    <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
      <ShoppingCart className="w-6 h-6" />

      {count > 0 && (
        <Badge className="absolute -top-2 -right-2  h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs" variant="destructive" >
          {count}
        </Badge>
      )}
    </div>
  )
}