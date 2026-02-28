import type { Product } from "@/Types/Product"

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  totalQuantity: number
  totalPrice: number
}