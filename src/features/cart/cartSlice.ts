import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "@/Types/Product"
import type { CartState } from "./types"

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addProduct: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        })
      }

      state.totalQuantity += 1
      state.totalPrice += action.payload.price
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload
      )

      if (!existingItem) return

      state.totalQuantity -= existingItem.quantity
      state.totalPrice -= existingItem.product.price * existingItem.quantity

      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      )
    },

    incrementProductQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      )

      if (!item) return

      item.quantity += 1
      state.totalQuantity += 1
      state.totalPrice += item.product.price
    },

    decrementProductQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      )

      if (!item) return

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (i) => i.product.id !== action.payload
        )
      } else {
        item.quantity -= 1
      }

      state.totalQuantity -= 1
      state.totalPrice -= item.product.price
    },
  },
})

export const {
  addProduct,
  removeProduct,
  incrementProductQty,
  decrementProductQty,
} = cartSlice.actions

export default cartSlice.reducer