import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
  id: string
  price: number
}

type CartState = {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
      state.total += action.payload.price
    }
  }
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
