import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Home from '../../pages/Home'

type CartState = {
  items: (typeof Home)[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<typeof Home>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item, index) => index !== action.payload
      )
    },
    removeAll: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove, removeAll } = cartSlice.actions
export default cartSlice.reducer
